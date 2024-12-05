import React from 'react';
import './RegisterView.css';

const RegisterView = () => (
  <div className="register">
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="First Name" required />
      <input type="text" placeholder="Last Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Re-enter Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default RegisterView;