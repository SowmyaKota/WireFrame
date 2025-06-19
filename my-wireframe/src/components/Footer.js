import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6>Contact Us</h6>
            <p>Email: support@example.com</p>
            <p>Phone: +44 1234 567890</p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-3">
            <h6>Follow Us</h6>
            <a href="#" className="text-white me-3">Facebook</a>
            <a href="#" className="text-white me-3">Twitter</a>
            <a href="#" className="text-white">LinkedIn</a>
          </div>

          {/* Legal Info */}
          <div className="col-md-4 mb-3">
            <h6>Legal</h6>
            <p>© 2025 Your Company</p>
            <a href="#" className="text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
