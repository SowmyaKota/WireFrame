import React from 'react';
import './HeroSection.css'; 

export default function HeroSection() {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="overlay"></div>
      <div className="content position-relative">
        <h1 className="display-4 fw-bold">Welcome to Dashboard</h1>
        <p className="lead">Monitor your performance, track analytics, and stay on top of your goals.</p>
        <a href="#cards" className="btn btn-primary btn-lg mt-3">Get Started</a>
      </div>
    </div>
  );
}
