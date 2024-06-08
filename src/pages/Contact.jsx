import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: </label>
          <input type="text" name="name" required />
        </p>
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" required />
        </p>
  
        <p>
          <label>Message: </label>
          <textarea name="message" required></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
