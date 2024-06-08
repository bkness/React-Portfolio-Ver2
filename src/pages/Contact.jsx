import React from 'react';
// import './Contact.css';

export default function Contact() {
  return (
    <div>
      <form method='POST' data-netlify='true' onSubmit='submit'> 
   
    <input type="hidden" name="form-name" value='contact v1' />
   
    <div>
      <label>First Name <br />
        <input type="text" name='first-name' />
      </label>
    </div>

    <div>
      <label htmlFor='email'>Email</label> <br /> 
      <input id='email' type="email" name="email" />
    </div>

    <div>
      <label>Messages <br />
      <textarea name="messages" rows='7'></textarea>
    
      </label>
    </div>

    <button type='submit'>Submit The Results</button>
    

      </form>
    </div>
  );
}
