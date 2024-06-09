import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="post" data-netlify="true" onSubmit='submit'>
        <input type="hidden" name="form-name" value="contact" />
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
