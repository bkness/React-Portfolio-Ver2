import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" onSubmit='submit'>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name: </label>
          <input type="text" name="name" placeholder='Your Name' />
        </p>
        <p>
          <label>Email: </label>
          <input type="email" name="email" placeholder='Your Email' id='email' />
        </p>
  
        <p>
          <label>Message: </label>
          <textarea name="message" placeholder='Your Message' required rows='5'></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;