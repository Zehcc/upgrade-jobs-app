import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './_landingPage.scss';

const LandingPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link to='/home'>
      <div className='landing-page'>
        <Logo />
      </div>
    </Link>
  );
};

export default LandingPage;
