import React from 'react';
// import './Contact.css'; 

export default function ContactForm() {
  return (
    <>
      <form name="contact" data-netlify='true'>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Messages <input type="text" name="messages" /> </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
