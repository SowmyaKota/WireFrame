import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="p-3 d-md-none">
        <i
          className="bi bi-list fs-2"
          onClick={toggleSidebar}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>

      {/* Sidebar */}
      <div className={`sidebar d-flex flex-column justify-content-between p-3 ${isOpen ? '' : 'collapsed'} d-none d-md-flex d-md-block`}>
        <div>
          <div className="sidebar-logo mb-4 fs-3 d-none d-md-block">
            <i className="bi bi-list"></i>
          </div>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link sidebar-link">
                <i className="bi bi-house-door me-2"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link sidebar-link">
                <i className="bi bi-person me-2"></i> Profile
              </a>
            </li>
            <li>
              <a href="#" className="nav-link sidebar-link">
                <i className="bi bi-bar-chart-line me-2"></i> Analytics
              </a>
            </li>
          </ul>
        </div>

        <div>
          <hr className="text-light" />
          <ul className="nav nav-pills flex-column">
            <li>
              <a href="#" className="nav-link sidebar-link">
                <i className="bi bi-gear me-2"></i> Settings
              </a>
            </li>
            <li>
              <a href="#" className="nav-link sidebar-link">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
