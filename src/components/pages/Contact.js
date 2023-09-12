import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'This field is required.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '', // Clear the error when validation passes
      }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailBlur = () => {
    if (email.trim() !== '' && !validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '', // Clear the error when validation passes
      }));
    }
  };

  const handleChange = (e) => {
    // Clear the error when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if there are any errors in the errors state
    if (Object.values(errors).every((error) => error === '')) {
      // All fields are valid, you can submit the form
      alert('Form submitted successfully'); // Replace this with your actual submission logic
    } else {
      // There are errors in the form; you can display an error message or take other actions
      alert('Please fix the errors in the form');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label className='colm-1'>
        Name:
        <input
          className='colm-2'
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            handleChange(e); // Clear the error when typing
          }}
          onBlur={handleBlur}
        />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <br />
      <label className='colm-1'>
        Email:
        <input
          className='colm-2'
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleChange(e); // Clear the error when typing
          }}
          onBlur={handleEmailBlur}
        />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <br />
      <label className='colm-1'>
        Message:
        <textarea
          className='colm-2'
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            handleChange(e); // Clear the error when typing
          }}
          onBlur={handleBlur}
        ></textarea>
        {errors.message && <span>{errors.message}</span>}
      </label>
      <br />
      <button className='colm-3' type="submit">
        Submit
      </button>
    </form>
  );
}

export default Contact;
