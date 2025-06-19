import React from 'react';

export default function ChartSection() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        {/* Chart Placeholder 1 */}
        <div className="col-md-6">
          <div className="bg-light border rounded shadow-sm" style={{ height: '200px' }}>
            <p className="text-center pt-5 text-muted">Chart Placeholder 1</p>
          </div>
        </div>

        {/* Chart Placeholder 2 */}
        <div className="col-md-6">
          <div className="bg-light border rounded shadow-sm" style={{ height: '200px' }}>
            <p className="text-center pt-5 text-muted">Chart Placeholder 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
