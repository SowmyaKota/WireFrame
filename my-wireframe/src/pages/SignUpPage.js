import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage({ onSignUp }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onSignUp(name); 
      navigate('/');  
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}
