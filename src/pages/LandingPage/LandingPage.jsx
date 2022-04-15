import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './_landingPage.scss';

const LandingPage = () => {
  return (
    <Link to='/login'>
    <div className='landing-page'>
      <Logo />
    </div>
    </Link>
  );
};

export default LandingPage;
