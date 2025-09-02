import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import ReportForm from './pages/ReportForm'
import MapViewer from './pages/MapViewer'
import CitizenGuide from './pages/CitizenGuide'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/map" element={<MapViewer />} />
          <Route path="/guide" element={<CitizenGuide />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
