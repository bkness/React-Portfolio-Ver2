import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact-form" action='/' data-netlify="true" method="POST" onSubmit={(e) => e.preventDefault()}>
        <input type="hidden" name="form-name" value="contact-form" />
        <div>     
          <label>First Name:</label> <br />
          <div className='input'>
          <input type="text" name="first-name" required />
        </div>
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br />
          <input id="email" type="email" name="email" required />
        </div>
        <div>
          <label>Message:</label> <br />
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}