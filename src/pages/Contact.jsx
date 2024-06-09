import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
     
      <h1>Contact Me</h1>
     
      <form name='contact v2' method='post' data-netlify='true' onSubmit='submit'>
     
        <div className='input'>
          <input type="hidden" name="form-name" id="contact v2" />
        </div>

        <div>
          <label>Name:
            <input type="text" name='first-name' />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email:</label> 
            <input type="email" name="email" id="email" />
        </div> 

        <div>
          <label>Messages
            <textarea name="messages"></textarea>
          </label>
        </div>
        {/* test */}
        <button type='submit'>Submit</button>

      </form>
    </div>
  );
}
