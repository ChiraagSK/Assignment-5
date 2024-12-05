import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => (
  <header>
    <h1>Cineflix</h1>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
);

export default Header;