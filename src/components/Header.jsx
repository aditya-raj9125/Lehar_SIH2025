import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, BarChart3, FileText, User } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Report Now', href: '/report', icon: FileText },
    { name: 'Map Viewer', href: '/map', icon: MapPin },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Guide', href: '/guide', icon: User },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <div className="logo-square"></div>
              <div className="logo-triangle"></div>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">LEHAR</span>
              <span className="logo-subtitle">Localized Early-warning & Hazard Assessment for Response</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              )
            })}
            <div className="mobile-auth">
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
