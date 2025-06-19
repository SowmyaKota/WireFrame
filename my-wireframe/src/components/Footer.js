import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          
          <div className="col-md-4 mb-3">
            <h6>Contact Us</h6>
            <p>Email: support@gmail.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6>Follow Us</h6>
            <a href="#" className="text-white me-3">Facebook</a>
            <a href="#" className="text-white me-3">Twitter</a>
            <a href="#" className="text-white">LinkedIn</a>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6>Legal</h6>
            <p>© 2025 Company</p>
            <a href="#" className="text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
