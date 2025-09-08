import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Upload, MapPin, AlertTriangle, Camera, Video, FileText } from 'lucide-react'
import './ReportForm.css'

const ReportForm = () => {
  const [mediaFiles, setMediaFiles] = useState([])
  const [location, setLocation] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const hazardTypes = [
    'Flood',
    'Cyclone',
    'Tsunami',
    'Storm Surge',
    'High Waves',
    'Coastal Erosion',
    'Abnormal Sea Behavior',
    'Other',
  ]

  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files)
    setMediaFiles(prev => [...prev, ...files])
  }

  const removeMediaFile = (index) => {
    setMediaFiles(prev => prev.filter((_, i) => i !== index))
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error('Error getting location:', error)
          alert('Unable to get your location. Please select manually on the map.')
        }
      )
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      const reportData = {
        ...data,
        mediaFiles: mediaFiles,
        location: location,
        timestamp: new Date().toISOString(),
        hazardType: data.hazardType || 'Auto-classified',
      }

      console.log('Submitting report:', reportData)
      
      // Here you would send data to your backend API
      // await fetch('/api/reports', { method: 'POST', body: JSON.stringify(reportData) })
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Report submitted successfully! Thank you for helping keep our coast safe.')
      reset()
      setMediaFiles([])
      setLocation(null)
    } catch (error) {
      console.error('Error submitting report:', error)
      alert('Error submitting report. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="report-form-page">
      <div className="container">
        <div className="report-header">
          <h1 className="report-title">Report hazard now.</h1>
          <p className="report-subtitle">Submit coastal incidents and photos.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="report-form">
          <div className="form-grid">
            {/* Basic Information */}
            <div className="form-section">
              <h2 className="section-title">Report Details</h2>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`input ${errors.name ? 'error' : ''}`}
                  placeholder="Jane Smith"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`input ${errors.email ? 'error' : ''}`}
                  placeholder="jane@phone.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="hazardType" className="form-label">Hazard Type (Optional)</label>
                <select
                  id="hazardType"
                  className="input"
                  {...register('hazardType')}
                >
                  <option value="">Auto-classify from description</option>
                  {hazardTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">Message</label>
                <textarea
                  id="description"
                  className={`input textarea ${errors.description ? 'error' : ''}`}
                  placeholder="Your message..."
                  {...register('description', { 
                    required: 'Description is required',
                    minLength: {
                      value: 10,
                      message: 'Description must be at least 10 characters'
                    }
                  })}
                />
                {errors.description && <span className="error-message">{errors.description.message}</span>}
              </div>
            </div>

            {/* Media and Location */}
            <div className="form-section">
              <h2 className="section-title">Media & Location</h2>
              
              {/* Media Upload */}
              <div className="form-group">
                <label className="form-label">Attach Media</label>
                <div className="media-upload-area">
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleMediaUpload}
                    className="media-input"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" className="media-upload-label">
                    <Upload size={24} />
                    <span>Upload photos or videos for clear evidence</span>
                  </label>
                </div>
                
                {mediaFiles.length > 0 && (
                  <div className="media-preview">
                    {mediaFiles.map((file, index) => (
                      <div key={index} className="media-item">
                        {file.type.startsWith('image/') ? (
                          <img 
                            src={URL.createObjectURL(file)} 
                            alt={`Media ${index + 1}`}
                            className="media-thumbnail"
                          />
                        ) : (
                          <div className="media-thumbnail video">
                            <Video size={20} />
                          </div>
                        )}
                        <span className="media-name">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeMediaFile(index)}
                          className="remove-media"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="form-group">
                <label className="form-label">Geotag Incident</label>
                <div className="location-section">
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    className="btn btn-secondary location-btn"
                  >
                    <MapPin size={18} />
                    Use Current Location
                  </button>
                  
                  {location && (
                    <div className="location-display">
                      <span className="location-text">
                        📍 {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                      </span>
                    </div>
                  )}
                  
                  <p className="location-help">
                    Location data helps validate reports in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReportForm
