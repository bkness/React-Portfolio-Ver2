import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <form
        name='contact v3'
        method='post'
        data-netlify='true'
        onSubmit='true'
      >
        <input type='hidden' name='form-name' value='contact v3' />

        <div>
          <label>Your Name: <br />
            <input type="text" name='first-name' />
          </label>
        </div>

        <div>
          <label htmlFor='email'></label> <br />
          <input id='email' type='email' name='email' />
        </div>

        <div>
          <label>Messages: <br />
    <textarea name='messages'></textarea>
          </label>
        </div>

        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}