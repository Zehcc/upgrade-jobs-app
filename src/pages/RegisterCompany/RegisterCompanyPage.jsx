import React from 'react';
import RegisterCompanyForm from '../../components/RegisterCompanyForm/RegisterCompanyForm';

const RegisterCompanyPage = () => {
  return (
    <div className='register-page'>
      <div className='register-page-img-container'>
        <img className='register-page-img' src='/assets/Signup.png' alt='Sign up' />
      </div>
      <h4>Regístrate como empresa</h4>
      <RegisterCompanyForm />
    </div>
  );
};

export default RegisterCompanyPage;
