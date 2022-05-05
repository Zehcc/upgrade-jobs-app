import React from 'react';
import RegisterUserForm from '../../components/RegisterUserForm/RegisterUserForm';

const RegisterUserPage = () => {
  return (
    <div className='register-page'>
      <div className="register-page-img-container">
        <img className='register-page-img' src='/assets/Signup.png' alt='Sign up' />
      </div>
      <h4>Regístrate como usuario</h4>
      <RegisterUserForm />
    </div>
  );
};

export default RegisterUserPage;
