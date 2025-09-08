import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, BarChart3, Brain, Users, Shield, Globe, UserCheck, TrendingUp, MapIcon, Image, AlertTriangle, Languages, Users2, Map, Activity } from 'lucide-react'
import './HomePage.css'

const HomePage = () => {
  const features = [
    {
      title: 'Crowd Reporting',
      description: 'Submit geotagged observations, photos, and videos via a user-friendly app.',
      icon: Users,
      color: 'var(--color-gray-100)',
    },
    {
      title: 'Dynamic Maps',
      description: 'Visualize live reports and social media hotspots with advanced filters.',
      icon: MapPin,
      color: 'var(--color-gray-100)',
    },
    {
      title: 'AI-powered insights.',
      description: 'Leverage NLP to monitor public sentiment and hazard trends in real time.',
      icon: Brain,
      color: 'var(--color-gray-100)',
    },
    {
      title: 'Role-based access',
      description: 'Assign user rights for citizens, officials, and analysts for tailored data access.',
      icon: Shield,
      color: 'var(--color-gray-100)',
    },
    {
      title: 'Multilingual support',
      description: 'Access the platform in multiple Indian languages for better citizen engagement.',
      icon: Languages,
      color: 'var(--color-gray-100)',
    },
  ]

  const analyticsData = {
    activeUsers: 12000,
    coverageArea: 150000,
    incidentsThisMonth: 120,
  };

  const weeklyActivity = [
    { day: 'Mon', reports: 10 },
    { day: 'Tue', reports: 15 },
    { day: 'Wed', reports: 12 },
    { day: 'Thu', reports: 18 },
    { day: 'Fri', reports: 20 },
    { day: 'Sat', reports: 15 },
    { day: 'Sun', reports: 10 },
  ];

  const hazardDistribution = [
    { type: 'Flood', percentage: 35, color: '#3b82f6' },
    { type: 'Cyclone', percentage: 25, color: '#ef4444' },
    { type: 'High Waves', percentage: 20, color: '#10b981' },
    { type: 'Storm Surge', percentage: 15, color: '#f97316' },
    { type: 'Other', percentage: 5, color: '#6b7280' }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>
              Government of India Initiative
            </div>
            <h1 className="hero-title">
              <span className="title-part-1">Protecting India's</span>
              <span className="title-part-2"> Coastal Communities</span>
            </h1>
            <p className="hero-subtitle">
              Advanced hazard monitoring and citizen reporting system for tsunamis, cyclones, and marine emergencies across India's 7,500 km coastline.
            </p>
            <div className="hero-actions">
              <Link to="/report" className="btn btn-primary">
                Report Hazard Now
              </Link>
              <Link to="/map" className="btn btn-secondary">
                View Live Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="feature-card" style={{ backgroundColor: feature.color }}>
                  <h3 className="feature-title">{feature.title}</h3>
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <p className="feature-description">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency Hotline Section */}
      <section className="emergency-hotline">
        <div className="container">
          <div className="hotline-content">
            <div className="hotline-scroll">
              <div className="hotline-item">
                <span className="hotline-text">NDRF | 1800-123-4567</span>
              </div>
              <div className="hotline-item">
                <span className="hotline-text">Coast Guard | 1554</span>
              </div>
              <div className="hotline-item">
                <span className="hotline-text">Disaster Management | 1070</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics-section">
        <div className="container">
          {/* Metrics Cards */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon active-users">
                <Users2 size={24} />
              </div>
              <div className="metric-content">
                <h3 className="metric-title">Active Users</h3>
                <div className="metric-value">{analyticsData.activeUsers.toLocaleString()}</div>
                <div className="metric-trend positive">
                  <TrendingUp size={16} />
                  <span>+5% from last week</span>
                </div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon coverage-area">
                <Map size={24} />
              </div>
              <div className="metric-content">
                <h3 className="metric-title">Coverage Area</h3>
                <div className="metric-value">{analyticsData.coverageArea.toLocaleString()} km</div>
                <div className="metric-trend positive">
                  <TrendingUp size={16} />
                  <span>+3% from last week</span>
                </div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon reports-media">
                <Activity size={24} />
              </div>
              <div className="metric-content">
                <h3 className="metric-title">Incidents this month</h3>
                <div className="metric-value">{analyticsData.incidentsThisMonth}</div>
                <div className="metric-trend positive">
                  <TrendingUp size={16} />
                  <span>+18% from last week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-grid">
            {/* Hazard Distribution Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Hazard Types Distribution</h3>
                <AlertTriangle size={20} className="chart-icon" />
              </div>
              <div className="chart-content">
                <div className="hazard-chart">
                  {hazardDistribution.map((hazard, index) => (
                    <div key={index} className="hazard-item">
                      <div className="hazard-bar-container">
                        <div 
                          className="hazard-bar" 
                          style={{ 
                            width: `${hazard.percentage}%`, 
                            backgroundColor: hazard.color 
                          }}
                        ></div>
                      </div>
                      <div className="hazard-info">
                        <span className="hazard-type">{hazard.type}</span>
                        <span className="hazard-percentage">{hazard.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="chart-card map-card-full">
              <div className="homepage-map-container">
                <div className="homepage-map-placeholder">
                  <div className="homepage-map-content">
                    {/* Mock Map Markers */}
                    <div className="homepage-map-markers">
                      <div
                        className="homepage-map-marker report-marker high"
                        style={{
                          left: '60%',
                          top: '40%'
                        }}
                      >
                        <AlertTriangle size={12} />
                      </div>
                      <div
                        className="homepage-map-marker social-marker negative"
                        style={{
                          left: '30%',
                          top: '60%'
                        }}
                      >
                        <Users size={12} />
                      </div>
                      <div
                        className="homepage-map-marker hotspot-marker high"
                        style={{
                          left: '70%',
                          top: '70%'
                        }}
                      >
                        <TrendingUp size={12} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homepage-map-button-bottom-left">
                  <Link to="/map" className="btn btn-primary">
                    View Detailed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="cta-title-part-1">Be the Change.</span>
              <span className="cta-title-part-2"> Save Lives.</span>
            </h2>
            <p className="cta-description">
              Your voice matters. Every report you submit helps protect thousands of coastal families. 
              Join India's largest citizen-driven disaster response network and become a guardian of our coastline.
            </p>
            <Link to="/report" className="btn btn-primary">
              Report Hazard Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
