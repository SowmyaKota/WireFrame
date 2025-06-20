import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotificationsPage() {
  const notifications = [
    { id: 1, title: "New Message", content: "You have a new message from Admin." },
    { id: 2, title: "System Update", content: "System maintenance scheduled at 12:00 AM tonight." },
    { id: 3, title: "Weekly Summary", content: "Your weekly performance report is ready." },
  ];

  return (
    <div className="container mt-4 text-dark">
      <h3 className="mb-4">Notifications</h3>
      {notifications.map((note) => (
        <div className="card mb-3 shadow-sm bg-white text-dark" key={note.id}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
