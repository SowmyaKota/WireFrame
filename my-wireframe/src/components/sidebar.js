import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Sidebar() {
  return (
    <div
  className="bg-dark text-white d-flex flex-column justify-content-between p-3"
  style={{ width: '220px' }}
>
  <div>
    <div className="mb-4 fw-bold fs-4">☰</div>

    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link text-white">
          <i className="bi bi-house-door me-2"></i> Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-person me-2"></i> Profile
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-bar-chart-line me-2"></i> Analytics
        </a>
      </li>
    </ul>
  </div>

  <div>
    <hr className="text-secondary" />
    <ul className="nav nav-pills flex-column">
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-gear me-2"></i> Settings
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </a>
      </li>
    </ul>
  </div>
</div>
  )
}