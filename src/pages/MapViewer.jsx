import React, { useState, useEffect } from 'react'
import { MapPin, Filter, Layers, Info, AlertTriangle, Users, TrendingUp, Calendar } from 'lucide-react'
import './MapViewer.css'

const MapViewer = () => {
  const [activeLayers, setActiveLayers] = useState(['reports', 'social', 'hotspots'])
  const [selectedFilters, setSelectedFilters] = useState({
    hazardType: 'all',
    timeRange: '24h',
    source: 'all'
  })

  // Weekly activity data for the last 7 days
  const weeklyActivity = [
    { day: 'Mon', reports: 10, date: '2024-01-15' },
    { day: 'Tue', reports: 15, date: '2024-01-16' },
    { day: 'Wed', reports: 12, date: '2024-01-17' },
    { day: 'Thu', reports: 18, date: '2024-01-18' },
    { day: 'Fri', reports: 20, date: '2024-01-19' },
    { day: 'Sat', reports: 15, date: '2024-01-20' },
    { day: 'Sun', reports: 10, date: '2024-01-21' },
  ];

  // Mock data - in real app this would come from your backend API
  const mockReports = [
    {
      id: 1,
      type: 'Flood',
      location: { lat: 19.0760, lng: 72.8777 },
      description: 'Heavy flooding in coastal areas',
      urgency: 'high',
      timestamp: '2 hours ago',
      media: true,
      source: 'citizen',
      activityLevel: 20 // High activity for Friday
    },
    {
      id: 2,
      type: 'High Waves',
      location: { lat: 15.2993, lng: 74.1240 },
      description: 'Unusually high waves observed',
      urgency: 'medium',
      timestamp: '4 hours ago',
      media: true,
      source: 'citizen',
      activityLevel: 15 // Medium activity for Saturday
    },
    {
      id: 3,
      type: 'Storm Surge',
      location: { lat: 13.0827, lng: 80.2707 },
      description: 'Storm surge warning',
      urgency: 'high',
      timestamp: '6 hours ago',
      media: false,
      source: 'official',
      activityLevel: 18 // High activity for Thursday
    }
  ]

  const mockSocialPosts = [
    {
      id: 1,
      content: 'Heavy rains causing flooding in Mumbai #flood #mumbai',
      location: { lat: 19.0760, lng: 72.8777 },
      sentiment: 'negative',
      timestamp: '1 hour ago',
      platform: 'twitter',
      activityLevel: 20
    },
    {
      id: 2,
      content: 'Waves are getting higher at Goa beach #waves #goa',
      location: { lat: 15.2993, lng: 74.1240 },
      sentiment: 'neutral',
      timestamp: '3 hours ago',
      platform: 'facebook',
      activityLevel: 15
    }
  ]

  const mockHotspots = [
    {
      id: 1,
      location: { lat: 19.0760, lng: 72.8777 },
      intensity: 'high',
      radius: 5000,
      type: 'flood',
      reportCount: 15,
      socialMentions: 45,
      weeklyTrend: 'increasing'
    },
    {
      id: 2,
      location: { lat: 15.2993, lng: 74.1240 },
      intensity: 'medium',
      radius: 3000,
      type: 'waves',
      reportCount: 8,
      socialMentions: 23,
      weeklyTrend: 'stable'
    }
  ]

  const toggleLayer = (layer) => {
    setActiveLayers(prev => 
      prev.includes(layer) 
        ? prev.filter(l => l !== layer)
        : [...prev, layer]
    )
  }

  const updateFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  // Calculate activity intensity based on weekly data
  const getActivityIntensity = (activityLevel) => {
    if (activityLevel >= 18) return 'high';
    if (activityLevel >= 12) return 'medium';
    return 'low';
  }

  return (
    <div className="map-viewer-page">
      <div className="container">
        <div className="map-header">
          <h1 className="map-title">Interactive Ola Map</h1>
          <p className="map-subtitle">
            Visualize live reports, social media hotspots, and hazard trends with weekly activity patterns
          </p>
        </div>

        <div className="map-container">
          {/* Map Controls */}
          <div className="map-controls">
            <div className="control-section">
              <h3 className="control-title">Layers</h3>
              <div className="layer-toggles">
                <label className="layer-toggle">
                  <input
                    type="checkbox"
                    checked={activeLayers.includes('reports')}
                    onChange={() => toggleLayer('reports')}
                  />
                  <MapPin size={16} />
                  Citizen Reports
                </label>
                <label className="layer-toggle">
                  <input
                    type="checkbox"
                    checked={activeLayers.includes('social')}
                    onChange={() => toggleLayer('social')}
                  />
                  <Users size={16} />
                  Social Media
                </label>
                <label className="layer-toggle">
                  <input
                    type="checkbox"
                    checked={activeLayers.includes('hotspots')}
                    onChange={() => toggleLayer('hotspots')}
                  />
                  <TrendingUp size={16} />
                  Hotspots
                </label>
                <label className="layer-toggle">
                  <input
                    type="checkbox"
                    checked={activeLayers.includes('activity')}
                    onChange={() => toggleLayer('activity')}
                  />
                  <Calendar size={16} />
                  Weekly Activity
                </label>
              </div>
            </div>

            <div className="control-section">
              <h3 className="control-title">Filters</h3>
              <div className="filter-controls">
                <div className="filter-group">
                  <label className="filter-label">Hazard Type</label>
                  <select
                    value={selectedFilters.hazardType}
                    onChange={(e) => updateFilter('hazardType', e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Types</option>
                    <option value="flood">Flood</option>
                    <option value="cyclone">Cyclone</option>
                    <option value="tsunami">Tsunami</option>
                    <option value="storm-surge">Storm Surge</option>
                    <option value="high-waves">High Waves</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Time Range</label>
                  <select
                    value={selectedFilters.timeRange}
                    onChange={(e) => updateFilter('timeRange', e.target.value)}
                    className="filter-select"
                  >
                    <option value="24h">Last 24 hours</option>
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
                    <option value="90d">Last 90 days</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Source</label>
                  <select
                    value={selectedFilters.source}
                    onChange={(e) => updateFilter('source', e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Sources</option>
                    <option value="citizen">Citizen Reports</option>
                    <option value="official">Official Sources</option>
                    <option value="social">Social Media</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Map Display */}
          <div className="map-display">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-overlay">
                  <h3>Interactive Map</h3>
                  <p>Map integration with Leaflet/OpenStreetMap</p>
                  <p>Showing {activeLayers.length} active layers</p>
                  
                  {/* Weekly Activity Timeline */}
                  {activeLayers.includes('activity') && (
                    <div className="activity-timeline">
                      <h4>Weekly Activity Trend</h4>
                      <div className="timeline-bars">
                        {weeklyActivity.map((day, index) => (
                          <div key={index} className="timeline-bar">
                            <div className="timeline-label">{day.day}</div>
                            <div className="timeline-container">
                              <div 
                                className={`timeline-fill ${getActivityIntensity(day.reports)}`}
                                style={{ height: `${(day.reports / 20) * 100}%` }}
                              ></div>
                            </div>
                            <div className="timeline-value">{day.reports}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Mock Map Markers */}
                  {activeLayers.includes('reports') && (
                    <div className="map-markers">
                      {mockReports.map(report => (
                        <div
                          key={report.id}
                          className={`map-marker report-marker ${report.urgency} ${getActivityIntensity(report.activityLevel)}`}
                          style={{
                            left: `${((report.location.lng + 180) / 360) * 100}%`,
                            top: `${((90 - report.location.lat) / 180) * 100}%`
                          }}
                        >
                          <AlertTriangle size={12} />
                          <span className="marker-tooltip">
                            {report.type} - {report.description}
                            <br />
                            Activity Level: {report.activityLevel} reports
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeLayers.includes('social') && (
                    <div className="map-markers">
                      {mockSocialPosts.map(post => (
                        <div
                          key={post.id}
                          className={`map-marker social-marker ${post.sentiment} ${getActivityIntensity(post.activityLevel)}`}
                          style={{
                            left: `${((post.location.lng + 180) / 360) * 100}%`,
                            top: `${((90 - post.location.lat) / 180) * 100}%`
                          }}
                        >
                          <Users size={12} />
                          <span className="marker-tooltip">
                            {post.content}
                            <br />
                            Activity Level: {post.activityLevel} mentions
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeLayers.includes('hotspots') && (
                    <div className="map-markers">
                      {mockHotspots.map(hotspot => (
                        <div
                          key={hotspot.id}
                          className={`map-marker hotspot-marker ${hotspot.intensity}`}
                          style={{
                            left: `${((hotspot.location.lng + 180) / 360) * 100}%`,
                            top: `${((90 - hotspot.location.lat) / 180) * 100}%`
                          }}
                        >
                          <TrendingUp size={12} />
                          <span className="marker-tooltip">
                            Hotspot: {hotspot.reportCount} reports, {hotspot.socialMentions} mentions
                            <br />
                            Weekly Trend: {hotspot.weeklyTrend}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Legend */}
        <div className="map-legend">
          <h3 className="legend-title">Legend</h3>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-marker report-marker high"></div>
              <span>High Urgency Reports</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker report-marker medium"></div>
              <span>Medium Urgency Reports</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker social-marker negative"></div>
              <span>Negative Social Sentiment</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker hotspot-marker high"></div>
              <span>High Intensity Hotspots</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker activity-marker high"></div>
              <span>High Activity Areas</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker activity-marker medium"></div>
              <span>Medium Activity Areas</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker activity-marker low"></div>
              <span>Low Activity Areas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapViewer
