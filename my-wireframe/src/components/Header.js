import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ userName }) {
  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#dee2e6' }}>
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
        <i className="bi bi-grid-fill fs-3 text-primary"></i>
        <span className="fw-bold text-dark">Dashboard</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-2">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/reports">Reports</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link text-dark" to="/notifications">
              <i className="bi bi-bell me-2"></i> Notifications
            </Link>
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
