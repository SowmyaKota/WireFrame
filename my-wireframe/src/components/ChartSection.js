import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartSection() {
  
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 300, 250, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 5,
      }
    ]
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Visitors',
        data: [50, 75, 125, 100, 150],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.3,
        pointBackgroundColor: '#36A2EB',
      }
    ]
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-white border rounded shadow-sm p-3">
            <h6 className="text-center mb-3">Monthly Sales</h6>
            <Bar data={barData} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-white border rounded shadow-sm p-3">
            <h6 className="text-center mb-3">Website Visitors</h6>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
}
