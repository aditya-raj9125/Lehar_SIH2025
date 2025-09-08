import React from 'react'
import { Shield, Users, Globe, TrendingUp, MapPin, Brain } from 'lucide-react'
import './About.css'

const About = () => {
  const missionPoints = [
    {
      title: 'Community Safety',
      description: 'Protect coastal communities through early warning and real-time monitoring',
      icon: Shield,
    },
    {
      title: 'Crowdsourced Intelligence',
      description: 'Harness the power of citizen observations and social media insights',
      icon: Users,
    },
    {
      title: 'Global Accessibility',
      description: 'Provide multilingual support and offline capabilities for remote areas',
      icon: Globe,
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Leverage NLP and machine learning for intelligent hazard detection',
      icon: Brain,
    },
    {
      title: 'Real-time Mapping',
      description: 'Visualize hazards on interactive maps with dynamic hotspot detection',
      icon: MapPin,
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Enable evidence-based emergency response and policy making',
      icon: TrendingUp,
    },
  ]

  const teamMembers = [
    {
      name: 'Dr. Coastal Safety',
      role: 'Lead Disaster Management',
      expertise: 'Emergency Response & Early Warning Systems',
    },
    {
      name: 'Tech Innovation Team',
      role: 'Software Development',
      expertise: 'Full-Stack Development & AI/ML Integration',
    },
    {
      name: 'Community Outreach',
      role: 'Citizen Engagement',
      expertise: 'Public Awareness & Training Programs',
    },
    {
      name: 'Data Science Unit',
      role: 'Analytics & Insights',
      expertise: 'NLP, Sentiment Analysis & Trend Detection',
    },
  ]

  const partners = [
    'Indian National Centre for Ocean Information Services (INCOIS)',
    'National Disaster Management Authority (NDMA)',
    'Coastal State Authorities',
    'Research Institutions & Universities',
    'International Disaster Response Organizations',
    'Local Community Groups & NGOs',
  ]

  return (
    <div className="about-page">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">About BOA Platform</h1>
          <p className="about-subtitle">
            Empowering coastal resilience through technology, community engagement, and real-time intelligence
          </p>
        </div>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-description">
              The BOA (Beach Ocean Alert) Platform is a comprehensive disaster management solution 
              designed to address the critical gap in real-time coastal hazard monitoring. By combining 
              citizen science, social media intelligence, and advanced AI analytics, we create a unified 
              system that enables faster response times and better decision-making during ocean-related emergencies.
            </p>
            
            <div className="mission-grid">
              {missionPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="mission-point">
                    <div className="point-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="point-title">{point.title}</h3>
                    <p className="point-description">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="problem-solution-section">
          <div className="problem-solution-grid">
            <div className="problem-card">
              <h3 className="card-title">The Challenge</h3>
              <p className="card-description">
                India's vast coastline faces increasing vulnerability to ocean hazards. Traditional 
                monitoring systems rely heavily on satellite data and numerical models, often missing 
                critical ground-level observations and public sentiment that could provide early warning 
                of emerging threats.
              </p>
              <ul className="challenge-list">
                <li>Delayed field reporting from remote coastal areas</li>
                <li>Untapped social media intelligence during hazard events</li>
                <li>Limited real-time validation of early warning models</li>
                <li>Gaps in community engagement and awareness</li>
              </ul>
            </div>

            <div className="solution-card">
              <h3 className="card-title">Our Solution</h3>
              <p className="card-description">
                BOA Platform integrates multiple data sources into a unified, real-time monitoring 
                system that empowers both citizens and officials to respond faster and more effectively 
                to coastal hazards.
              </p>
              <ul className="solution-list">
                <li>Mobile-first citizen reporting with media upload</li>
                <li>AI-powered social media monitoring and analysis</li>
                <li>Interactive mapping with dynamic hotspot detection</li>
                <li>Real-time dashboard for emergency responders</li>
                <li>Offline-first capabilities for remote areas</li>
                <li>Multilingual support for regional accessibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="tech-section">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3 className="tech-category-title">Frontend</h3>
              <div className="tech-items">
                <span className="tech-item">React.js</span>
                <span className="tech-item">Vite</span>
                <span className="tech-item">Leaflet Maps</span>
                <span className="tech-item">Responsive Design</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Backend</h3>
              <div className="tech-items">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">REST API</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">AI & Analytics</h3>
              <div className="tech-items">
                <span className="tech-item">Natural Language Processing</span>
                <span className="tech-item">Sentiment Analysis</span>
                <span className="tech-item">Hazard Classification</span>
                <span className="tech-item">Trend Detection</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Infrastructure</h3>
              <div className="tech-items">
                <span className="tech-item">Cloud Hosting</span>
                <span className="tech-item">CDN</span>
                <span className="tech-item">SSL Security</span>
                <span className="tech-item">Offline Sync</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-expertise">{member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <h2 className="section-title">Partners & Collaborators</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-item">
                {partner}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Interested in collaborating or learning more about the BOA Platform? 
              We'd love to hear from you.
            </p>
            <div className="contact-actions">
              <button className="btn btn-primary">Contact Us</button>
              <button className="btn btn-secondary">Request Demo</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
