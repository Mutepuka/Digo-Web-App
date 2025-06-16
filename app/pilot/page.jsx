import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles.css";

const PilotProgram = () => {
  return (
    <div className='con-wrapper'>
      <div className="container">
        <div className="row con">
          {/* Left Column - Branding */}
          <div className="col-md-4 d-flex flex-column branding">
            <div className="col-md-8 d-flex flex-row align-items-center mb-3">
              <img
                src='assets/digo_estate.png'
                alt="DigO Estate Logo"
                className="img-fluid logo-img"
                style={{maxHeight: '50px'}}
              />
              <h1 className='home-logo ms-2'>DigO Estate</h1>
            </div>
            <div className="col-md-8">
              <p className="lead">Effortless Sales, Exceptional Homes<br/>Real Estate Made Easy! 🏠✨</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-md-8 d-flex flex-column home-steps">
            <div className="col-md-4 home-bac-btn mb-4">
              <a href='/' className="text-decoration-none">
                <i className="bi bi-arrow-bar-left"></i> Home
              </a>
            </div>
            
            <div className="add-poster bg-light p-4 rounded-3 shadow-sm">
              <div className="construction-placeholder text-center py-5">
                <i className="bi bi-building text-warning display-4 mb-3"></i>
                <h3 className="text-dark">Exciting New Properties Coming Soon!</h3>
                <p className="text-muted">
                    
                  We're crafting exceptional living spaces that will redefine modern living. 
                  Our team is working diligently to bring you premium real estate options 
                  in the most sought-after locations.
                </p>
                <div className="alert alert-info mt-3">
                  <i className="bi bi-envelope me-2"></i>
                  Want early access? <a href="/contact" className="alert-link">Join our waitlist</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PilotProgram;