import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State to manage form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle input changes in form fields 
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update formData state with new values 
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error message when the user starts typing again
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  // Function to handle the form submission 
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple form validation
    let errors = {};
    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (formData.message.trim() === '') {
      errors.message = 'Message is required';
    }

    // If there are validation errors, update formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } 
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </p>
        <p>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </p>

        <p>
          <label>Message: </label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
