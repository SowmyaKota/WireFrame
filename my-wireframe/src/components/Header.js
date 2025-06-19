import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
  {/* Only center logo content */}
  <a className="navbar-brand fw-bold" href="#">LOGO</a>

  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item px-2"><a className="nav-link" href="#">Link</a></li>
      <li className="nav-item px-2"><a className="nav-link" href="#">Link</a></li>
      <li className="nav-item px-2"><a className="nav-link" href="#">Link</a></li>
    </ul>
    <button className="btn btn-primary">Sign Up</button>
  </div>
</nav>

  );
}
