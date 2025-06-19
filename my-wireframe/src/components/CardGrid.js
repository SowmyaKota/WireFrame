import React from 'react';
import './CardGrid.css';

export default function CardGrid() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        
        <div className="col-lg-6">
          <div className="card large-card card-background-1">
            <div className="overlay"></div>
            <div className="content">
              <h4 className="fw-bold">Card Title</h4>
              <p>Some description here for the large card.</p>
              <button className="btn btn-primary">CTA Button</button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row g-4">
            {['2', '3', '4', '5'].map((bg, i) => (
              <div className="col-6" key={i}>
                <div className={`card small-card card-background-${bg}`}>
                  <div className="overlay"></div>
                  <div className="content">
                    <h6 className="fw-bold">Card Title</h6>
                    <p className="small">Card details...</p>
                    <button className="btn btn-outline-light btn-sm mt-2">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
