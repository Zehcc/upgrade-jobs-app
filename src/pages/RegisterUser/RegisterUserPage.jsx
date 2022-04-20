import React from 'react';
import RegisterUserForm from '../../components/RegisterUserForm/RegisterUserForm';

const RegisterUserPage = () => {
  return (
    <div className='register-page'>
      <h3>Rellena todos los campos para completar el registro</h3>
      <RegisterUserForm />
    </div>
  );
};

export default RegisterUserPage;
