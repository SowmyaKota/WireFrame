import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ userName }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand fw-bold" href="#">LOGO</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-2"><Link className="nav-link" to="/contact">Email</Link></li>
          <li className="nav-item px-2"><Link className="nav-link" to="#">Link 2</Link></li>
          <li className="nav-item px-2"><Link className="nav-link" to="#">Link 3</Link></li>
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

