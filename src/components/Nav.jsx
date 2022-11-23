import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import browser from "./browser.module.css"
import { Link } from 'react-router-dom';
// import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div className={browser.nav}>
          <img className={browser.logo} src={Logo} alt="img not found" /> 
        <Link to="/">
          <h2 className={browser.henry} >Henry - Whater App</h2>
        </Link>
        <Link to="/about">
          <h5 className={browser.about}>About Page</h5>
        </Link>
        <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
