import React from 'react'
import { AlertTriangle, Camera, MapPin, Clock, Shield, Users, Globe, Wifi } from 'lucide-react'
import './CitizenGuide.css'

const CitizenGuide = () => {
  const guideSections = [
    {
      title: 'How to Report a Hazard',
      icon: AlertTriangle,
      steps: [
        'Open the mobile app or web platform',
        'Click "Report Now" or navigate to the report form',
        'Fill in your contact information (name and email)',
        'Describe what you observed in detail',
        'Upload photos or videos if available',
        'Allow location access or manually select location',
        'Submit your report',
      ]
    },
    {
      title: 'What to Report',
      icon: Camera,
      items: [
        'Unusual wave patterns or high waves',
        'Flooding in coastal areas',
        'Storm surges or abnormal sea behavior',
        'Coastal erosion or damage',
        'Tsunami warning signs',
        'Cyclone-related coastal impacts',
        'Any other ocean-related hazards'
      ]
    },
    {
      title: 'Best Practices',
      icon: Shield,
      items: [
        'Take clear, well-lit photos or videos',
        'Include landmarks or recognizable features',
        'Report as soon as possible after observation',
        'Provide accurate location information',
        'Describe the severity and urgency',
        'Stay safe - don\'t put yourself at risk',
        'Report even if you\'re unsure - experts will verify'
      ]
    },
    {
      title: 'Offline Reporting',
      icon: Wifi,
      items: [
        'Reports can be created offline',
        'Data is stored locally on your device',
        'Automatically syncs when connection is restored',
        'Media uploads are queued for later',
        'No data loss during connectivity issues',
        'Perfect for remote coastal areas'
      ]
    }
  ]

  const features = [
    {
      title: 'Real-time Updates',
      description: 'Get instant notifications about hazards in your area',
      icon: Clock,
    },
    {
      title: 'Community Network',
      description: 'Connect with other coastal residents and volunteers',
      icon: Users,
    },
    {
      title: 'Multilingual Support',
      description: 'Available in local languages for better accessibility',
      icon: Globe,
    },
    {
      title: 'Location Services',
      description: 'Accurate GPS tracking for precise hazard mapping',
      icon: MapPin,
    }
  ]

  return (
    <div className="citizen-guide-page">
      <div className="container">
        {/* Header */}
        <div className="guide-header">
          <h1 className="guide-title">Citizen Guide</h1>
          <p className="guide-subtitle">
            Learn how to effectively report coastal hazards and contribute to community safety
          </p>
        </div>

        {/* Guide Sections */}
        <div className="guide-sections">
          {guideSections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="guide-section">
                <div className="section-header">
                  <div className="section-icon">
                    <Icon size={24} />
                  </div>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                
                {section.steps ? (
                  <ol className="steps-list">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="step-item">
                        <span className="step-number">{stepIndex + 1}</span>
                        <span className="step-text">{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="items-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="item">
                        <span className="item-bullet">•</span>
                        <span className="item-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="features-section">
          <h2 className="features-title">Platform Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Safety Information */}
        <div className="safety-section">
          <div className="safety-content">
            <h2 className="safety-title">Safety First</h2>
            <p className="safety-description">
              Your safety is our top priority. Never put yourself in danger to report a hazard. 
              If you're in immediate danger, contact emergency services first.
            </p>
            <div className="emergency-contacts">
              <h3>Emergency Contacts</h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <span className="contact-label">National Emergency:</span>
                  <span className="contact-value">112</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Coast Guard:</span>
                  <span className="contact-value">1554</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Weather Helpline:</span>
                  <span className="contact-value">1800-180-1717</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Do I need to create an account to report?</h3>
              <p className="faq-answer">
                No, you can submit anonymous reports. However, creating an account allows you to 
                track your reports and receive updates.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What happens after I submit a report?</h3>
              <p className="faq-answer">
                Your report is immediately processed by our AI system, classified by hazard type, 
                and shared with disaster management officials in real-time.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I edit or delete my report?</h3>
              <p className="faq-answer">
                Yes, you can edit your report within 24 hours of submission. Contact support for 
                any corrections needed after that time.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How is my privacy protected?</h3>
              <p className="faq-answer">
                We only share your contact information with authorized officials when necessary. 
                Your personal data is encrypted and stored securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitizenGuide
