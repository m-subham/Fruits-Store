import React from 'react';
import email_Image from '../assets/email.png';
import password_Image from '../assets/password.png';
import person_Image from '../assets/person.png';
import './Login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    // For example, you can access form fields with event.target.elements
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    console.log({ name, email, password });
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="header">
          <div className="sign_up">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="inputs-1">
            <img src={person_Image} alt="" className="person_image" />
            <input type="text" name="name" placeholder="Enter your Name" />
          </div>

          <div className="inputs-2">
            <img src={email_Image} alt="" />
            <input type="email" name="email" placeholder="Enter your Email" />
          </div>

          <div className="inputs-3">
            <img src={password_Image} alt="" />
            <input type="password" name="password" placeholder="Enter your Password" />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
