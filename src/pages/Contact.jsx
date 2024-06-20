import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" action='/Contact' method="POST">
        <input type="hidden" name='form-name' value="contact" />

        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input required type="text" name="name" id="name" placeholder='Ex: Steve' />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input 
            required 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Ex: Steve123@gmail.com'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea required name="message" id="message" placeholder='Ex: My name is Steve, lets connect!' rows='10'></textarea>
        </div>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
