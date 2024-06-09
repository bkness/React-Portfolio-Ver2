import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact v3" method="POST" data-netlify="true" onSubmit='true'>
        <input type="hidden" name="form-name" value="contact v3" />
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
}
