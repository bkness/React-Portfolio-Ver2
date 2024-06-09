import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="post" data-netlify="true" onSubmit='submit'>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <div>
            <label>Your Name: </label>
            <input type="text" name="first-name" />
          </div>
        </p>
        <p>
          <div>
            <label htmlFor='email'>Your Email: </label>
            <input type="email" name="email" id="email" />
          </div>
        </p>
        <p>
          <div>
            <label>Message:
              <textarea name="message" rows="5"></textarea>
            </label>
          </div>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
