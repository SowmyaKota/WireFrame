import React from 'react';
import './HeroSection.css'; // for custom styles if needed

export default function HeroSection() {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div>
        <h1 className="display-5 fw-bold">Example Header</h1>
        <button className="btn btn-info mt-3">CTA Button</button>
      </div>
    </div>
  );
}
