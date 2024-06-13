import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formValid, setFormValid] = useState(true); 

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate required fields
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFormValid(false);
      return;
    }

    // Form is valid, continue with submission 
    console.log('Submitting form...');
  

    // Reset form after successful submission
    setName('');
    setEmail('');
    setMessage('');
    setFormValid(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>

        <p>
          <label>Message: </label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </p>
        {!formValid && (
          <p style={{ color: 'red' }}>Please fill out all required fields.</p>
        )}
        <p>
          <button type="button" onClick={handleSubmit}>
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
