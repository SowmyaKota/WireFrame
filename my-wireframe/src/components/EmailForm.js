import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const EmailForm = () => {
  const form = useRef();
  const navigate=useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1ebl1dy',     
      'template_ryzei5e',    
      form.current,
      'Kvj2wsicM7-u6miHV'      
    )
    .then((result) => {
      alert('Message sent successfully!');
      setTimeout(()=>{
        navigate('/')
      },2000)
      form.current.reset();
    }, (error) => {
      alert('Failed to send message.');
      console.error(error.text);
    });
  };

  return (
    <div className="container mt-5" id='contact'>

      <form ref={form} onSubmit={sendEmail} className="p-4 shadow bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Your Email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input type="text" name="title" className="form-control" placeholder="Subject" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5">Send</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
