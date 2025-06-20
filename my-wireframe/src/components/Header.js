import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ userName }) {
  return (
    <nav
      className="navbar navbar-expand-lg px-4"
      style={{ backgroundColor: '#dee2e6' }}  // Light greyish color
    >
      <a className="navbar-brand d-flex align-items-center" href="#">
  <i className="bi bi-grid-fill fs-3 text-primary"></i>
</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-2"><Link className="nav-link" to="/contact">Email</Link></li>
          <li className="nav-item px-2"><Link to="/reports" className="nav-link px-3">Reports</Link></li>
          <li>
  <a href="/notifications" className="nav-link text-dark">
    <i className="bi bi-bell me-2"></i> Notifications
  </a>
</li>

        </ul>
        {userName ? (
          <span className="fw-bold">Welcome, {userName}!</span>
        ) : (
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        )}
      </div>
    </nav>
  );
}

