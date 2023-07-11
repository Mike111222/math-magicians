import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const Layout = () => (
  <nav className="navBar">
    <h1 className="navHeading">Math Magicians</h1>
    <ul className="navLinks">
      <li><Link to="/"><span>Home</span></Link></li>
      <li><Link to="/calculator"><span>Calculator</span></Link></li>
      <li><Link to="/quote"><span>Quote</span></Link></li>
    </ul>
  </nav>
);

export default Layout;
