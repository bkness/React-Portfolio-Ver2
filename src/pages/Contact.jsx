import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" action ='/Contact' method="POST" onSubmit='submit'>
      <input type="hidden" name='form-name' value="contact"/>
          <input required type="text" name="name" placeholder='Your Name' />
          <input required type="email" name="email" placeholder='Your Email' id='email' />
          <textarea required name="message" placeholder='Your Message' rows='10'></textarea>
          <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

