import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardGrid() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        {/* Large Card on the left */}
        <div className="col-lg-6">
          <div className="card h-100 shadow">
            <img src="https://via.placeholder.com/600x300" className="card-img-top" alt="Large Card" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text text-muted">This is a description of the large card.</p>
              <a href="#" className="btn btn-info">CTA Button</a>
            </div>
          </div>
        </div>

        {/* Smaller Cards on the right */}
        <div className="col-lg-6">
          <div className="row g-4">
            {[...Array(4)].map((_, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100 shadow-sm">
                  <img src="https://via.placeholder.com/300x150" className="card-img-top" alt="Small Card" />
                  <div className="card-body">
                    <h6 className="card-title">Card Title</h6>
                    <p className="card-text text-muted">Small card content</p>
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
