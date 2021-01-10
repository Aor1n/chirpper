import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export const Navbar = () => {

  const navItems = [
    ['/', 'Home'],
    ['/login', 'Sign in'],
    ['/register', 'Sign up'],
  ];

  const mappedNavItems = navItems.map((navItem) => (
    <li className="nav-item" key={navItem.toString()}>
      <Router>
        <NavLink
          to={navItem[0]} 
          className="nav-link"
          key={navItem.toString()}
          activeClassName="active"
          exact
        >
          {navItem[1]}
        </NavLink>
      </Router>
    </li>
    
  ));
  return (
    <header> 
      <nav className="navbar navbar-light">
        <div className="container">
          <Router>
            <Link to="/" className="navbar-brand">
              Chirpper
            </Link>
          </Router>
          <ul className="nav navbar-nav pull-xs-right">
            {mappedNavItems}    
          </ul>
        </div>
      </nav>
    </header>
  );
};