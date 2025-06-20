import React from 'react';

export default function ReportsPage() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Reports</h2>
      <p>This is the Reports page. Here you can view or download data reports.</p>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-3 border rounded bg-light shadow-sm">
            <h5>Monthly Summary</h5>
            <p>Download or view summary statistics for this month.</p>
            <button className="btn btn-primary">Download</button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-3 border rounded bg-light shadow-sm">
            <h5>User Activity</h5>
            <p>Track logins, usage frequency, and recent interactions.</p>
            <button className="btn btn-primary">View Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}
