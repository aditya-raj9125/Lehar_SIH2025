import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Live Map', href: '/map' },
        { name: 'Report Hazard', href: '/report' },
        { name: 'Incidents', href: '/incidents' },
        { name: 'Analytics', href: '/dashboard' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Hazard Information', href: '/hazards' },
        { name: 'Data Catalog', href: '/data' },
        { name: 'Safety Guides', href: '/guide' },
        { name: 'API Documentation', href: '/api' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Emergency: 1070', href: 'tel:1070' },
        { name: 'Coast Guard: 1554', href: 'tel:1554' },
        { name: 'Email: support@lehar.gov.in', href: 'mailto:support@lehar.gov.in' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter', href: 'https://twitter.com/lehar_gov' },
        { name: 'Facebook', href: 'https://facebook.com/lehar.gov' },
        { name: 'YouTube', href: 'https://youtube.com/lehar' },
        { name: 'LinkedIn', href: 'https://linkedin.com/company/lehar' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="logo-square"></div>
              <div className="logo-circle"></div>
              <div className="logo-triangle"></div>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">LEHAR</span>
              <span className="logo-full-form">Localized Early-warning & Hazard Assessment for Response</span>
            </div>
          </div>

          {/* Divider Line */}
          <div className="footer-divider"></div>

          {/* Navigation Sections */}
          <div className="footer-nav">
            {footerSections.map((section) => (
              <div key={section.title} className="footer-section">
                <h3 className="footer-section-title">{section.title}</h3>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-line"></div>
          <p className="footer-copyright">
            © 2025 LEHAR - Localized Early-warning & Hazard Assessment for Response. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
