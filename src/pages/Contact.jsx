import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: </label>
          <input type="text" name="name" />
        </p>
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" id='email' />
        </p>
  
        <p>
          <label>Message: </label>
          <textarea name="message" required rows='5'></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
