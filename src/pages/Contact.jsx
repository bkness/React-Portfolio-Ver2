import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" data-netlify="true" method="POST" onSubmit='true'>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: 
          <input type="text" name="name"/>
       </label>
        </p>
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" />
        </p>

        <p>
          <label>Message: 
          <textarea name="message"></textarea>
       </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}