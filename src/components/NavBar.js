import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { Link } from 'react-router-dom';
import logo from '../logo.png';
import classes from './NavBar.module.css';
import LoginButton from './Login/LoginButton';
import LogoutButton from './Login/LogoutButton';
import CartButton from './Cart/CartButton';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className='navbar navbar-expand'>
      <div className='container-fluid'>
        <a
          className={`navbar-brand ${classes.logo}`}
          href='/'
          alt='Shopping Cart'
        >
          <img src={logo} alt="Let's Do Shopping" />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Login
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/home'>
                Home
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </li> */}
          </ul>
          {/* <SeachForm /> */}
          {isAuthenticated && <CartButton />}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
