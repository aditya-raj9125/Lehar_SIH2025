import React, { useState, useEffect } from 'react'
import { BarChart3, MapPin, TrendingUp, AlertTriangle, Users, Clock, Filter } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import './Dashboard.css'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [timeRange, setTimeRange] = useState('24h')

  // Mock data - in real app this would come from Supabase
  const metrics = [
    { label: 'Incidents this month', value: '120+', trend: '+15%', color: 'var(--color-black)' },
    { label: 'High-risk states', value: '6', trend: '+2', color: 'var(--color-black)' },
    { label: 'Reports with media', value: '89%', trend: '+5%', color: 'var(--color-black)' },
  ]

  const chartData = [
    { name: '00:00', reports: 4, social: 12 },
    { name: '04:00', reports: 3, social: 8 },
    { name: '08:00', reports: 8, social: 25 },
    { name: '12:00', reports: 12, social: 35 },
    { name: '16:00', reports: 15, social: 42 },
    { name: '20:00', reports: 9, social: 28 },
  ]

  const hazardDistribution = [
    { name: 'Flood', value: 35, color: '#3b82f6' },
    { name: 'Cyclone', value: 25, color: '#ef4444' },
    { name: 'High Waves', value: 20, color: '#10b981' },
    { name: 'Storm Surge', value: 15, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#6b7280' },
  ]

  const recentReports = [
    {
      id: 1,
      type: 'Flood',
      location: 'Mumbai, Maharashtra',
      description: 'Heavy flooding in coastal areas, water level rising rapidly',
      timestamp: '2 hours ago',
      urgency: 'high',
      media: true,
    },
    {
      id: 2,
      type: 'High Waves',
      location: 'Goa Beach',
      description: 'Unusually high waves observed, beach erosion visible',
      timestamp: '4 hours ago',
      urgency: 'medium',
      media: true,
    },
    {
      id: 3,
      type: 'Storm Surge',
      location: 'Chennai, Tamil Nadu',
      description: 'Storm surge warning, coastal areas at risk',
      timestamp: '6 hours ago',
      urgency: 'high',
      media: false,
    },
  ]

  const socialTrends = [
    { keyword: 'flood', count: 156, sentiment: 'negative', change: '+23%' },
    { keyword: 'cyclone', count: 89, sentiment: 'negative', change: '+15%' },
    { keyword: 'storm', count: 234, sentiment: 'neutral', change: '+8%' },
    { keyword: 'waves', count: 67, sentiment: 'negative', change: '+12%' },
  ]

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div className="header-content">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="header-actions">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="time-selector"
              >
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <button className="btn btn-secondary">
                <Filter size={16} />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="metrics-section">
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-trend">
                  <TrendingUp size={16} />
                  {metric.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="dashboard-tabs">
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart3 size={18} />
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <AlertTriangle size={18} />
            Recent Reports
          </button>
          <button
            className={`tab-button ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            <Users size={18} />
            Social Trends
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="charts-grid">
                {/* Activity Chart */}
                <div className="chart-card">
                  <h3 className="chart-title">Activity Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-gray-200)" />
                      <XAxis dataKey="name" stroke="var(--color-gray-600)" />
                      <YAxis stroke="var(--color-gray-600)" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'var(--color-white)',
                          border: '1px solid var(--color-gray-200)',
                          borderRadius: 'var(--border-radius)',
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="reports" 
                        stroke="var(--color-black)" 
                        strokeWidth={2}
                        name="Citizen Reports"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="social" 
                        stroke="var(--color-gray-500)" 
                        strokeWidth={2}
                        name="Social Media"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Hazard Distribution */}
                <div className="chart-card">
                  <h3 className="chart-title">Hazard Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={hazardDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {hazardDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'var(--color-white)',
                          border: '1px solid var(--color-gray-200)',
                          borderRadius: 'var(--border-radius)',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Settings Section */}
              <div className="settings-section">
                <div className="settings-content">
                  <h2 className="settings-title">Adjust filters & theme.</h2>
                  <p className="settings-description">
                    Change language, dark mode, or analytics filters for deep insights.
                  </p>
                  <button className="btn btn-primary">Change Settings</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="reports-content">
              <div className="reports-grid">
                {recentReports.map((report) => (
                  <div key={report.id} className="report-card">
                    <div className="report-header">
                      <span className={`urgency-badge ${report.urgency}`}>
                        {report.urgency}
                      </span>
                      <span className="report-time">
                        <Clock size={14} />
                        {report.timestamp}
                      </span>
                    </div>
                    <h3 className="report-type">{report.type}</h3>
                    <p className="report-location">
                      <MapPin size={14} />
                      {report.location}
                    </p>
                    <p className="report-description">{report.description}</p>
                    <div className="report-footer">
                      {report.media && (
                        <span className="media-indicator">
                          📷 Media attached
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="social-content">
              <div className="social-trends">
                <h3 className="section-title">Social Media Trends</h3>
                <div className="trends-grid">
                  {socialTrends.map((trend, index) => (
                    <div key={index} className="trend-card">
                      <div className="trend-header">
                        <span className="trend-keyword">#{trend.keyword}</span>
                        <span className={`trend-change ${trend.change.startsWith('+') ? 'positive' : 'negative'}`}>
                          {trend.change}
                        </span>
                      </div>
                      <div className="trend-stats">
                        <span className="trend-count">{trend.count} mentions</span>
                        <span className={`trend-sentiment ${trend.sentiment}`}>
                          {trend.sentiment}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
