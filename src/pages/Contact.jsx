import React from 'react';
// import './Contact.css';

export default function Contact() {
  return (
    <div>
     <form method="POST" action="/" data-netlify="true" onSubmit="submit">
  <input type="hidden" name="form-name" value="contact" />
  <div>
    <label>
      First Name: <br />
      <input type="text" name="firstName" />
    </label>
  </div>
  <div>
    <label>
      Email: <br />
      <input type="email" name="email" />
    </label>
  </div>
  <div>
    <label>
      Message: <br />
      <textarea name="message" rows="4" />
    </label>
  </div>
  <button type="submit">Submit</button>
</form>
    </div>
  );
}
