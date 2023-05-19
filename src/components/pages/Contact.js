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
        [name]: '',
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
        email: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: 'This field is required.',
        }));
        }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='colm-1'>
        Name:
        <input className='colm-2'
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <br />
      <label className='colm-1'>
        Email:
        <input className='colm-2'
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
        />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <br />
      <label className='colm-1'>
        Message:
        <textarea className='colm-2'
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleBlur}
        ></textarea>
        {errors.message && <span>{errors.message}</span>}
      </label>
      <br />
      <button  className='colm-3' type="submit">Submit</button>
    </form>
  );
}

export default Contact;





// import React from 'react';

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>
//       Email - yoelregalado7@gmail.com
//       </p>
//     </div>
//   );
// }