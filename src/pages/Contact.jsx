import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact v1" method="post" data-netlify="true" onSubmit='submit'>
        <input type="hidden" name="form-name" value="contact v1" />
        <input type="hidden" name="redirect" value="/success-page" />
    <div>
      <label>First Name: 
        <div className='input'>
        <input type="text" name='first-name'/>
        </div>
      </label>
    </div>
<div>
  <label htmlFor='email'>Email:
  <div className='input'>
    <input id='email' type="email" name='email'/>
    </div>
     </label>
</div>
<div>
  <label>Messages:
    <div className='input'>
    <textarea name="messages"></textarea>
    </div>
  </label>
</div>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}
