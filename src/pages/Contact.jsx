import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <h1>Contact Me</h1>
     
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>

      <form name="contact" data-netlify="true" method="POST">
        <input type="hidden" name="form-name" value="contact" />
       
        <p>
          <label for='name'>Your Name: </label>
          <input type="text" name="name" id='name' placeholder='Your Name'/>
        </p>
      
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" placeholder='Your Email'/>
        </p>

        <p>
          <label for='message'>Message: </label>
          <textarea name="message" id='message' placeholder='Your Message'></textarea>
       
        </p>
        <p>
          <button type="submit">Send Message</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;

}
