import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar() {
  return (
    <div
  className="bg-dark text-white d-flex flex-column align-items-start p-3"
  style={{ width: '220px', height: '100vh' }}
>
  <div className="mb-4 fw-bold fs-5">☰</div> {/* Hamburger icon for aesthetics */}
  <ul className="nav nav-pills flex-column w-100">
    <li className="nav-item">
      <a href="#" className="nav-link text-white">🏠 Dashboard</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-white">👤 Profile</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-white">📊 Analytics</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-white">⚙️ Settings</a>
    </li>
  </ul>
</div>
  );
}
