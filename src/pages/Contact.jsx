import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact-form" data-netlify="true" method="POST" onSubmit={(e) => e.preventDefault()}>
        {/* Corrected form-name value to match the form's name attribute */}
        <input type="hidden" name="form-name" value="contact-form" />
        <p>
          <label>Your Name: </label>
          <input type="text" name="name"/>
        </p>
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" />
        </p>

        <p>
          <label>Message: </label>
          <textarea name="message" rows='5'></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}