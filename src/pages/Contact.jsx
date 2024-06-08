import React from 'react';
import './Contact.css'; 

export default function ContactForm() {
  return <div className='contact-container'>
  <h1>Contact</h1>
      <form name="contact v1"
      method='post'
      data-netlify='true' 
      onSubmit="submit"
      >
        <input type="hidden" name="form-name" value='contact v1' 
        />

  <div>
    <label className='form-text'>Name: <br />
      <input className='fields' type="text" name='first-name' />
      </label>
  </div>

  <div>
    <label className='form-text' htmlFor='email'>Email Address: </label> <br />
    <input className='fields' id="email" type="email" name="email"/>
  </div>

  <div>
    <label className='form-text'>Messages: <br />
<textarea className='fields' name="messages" rows="7"></textarea>
    </label>
  </div>

    <button className='primary-button' type='submit'>Submit Message</button>
    
    </form> 
    
  </div>
}
