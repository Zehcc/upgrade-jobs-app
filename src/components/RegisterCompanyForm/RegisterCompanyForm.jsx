
import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { API } from "../../shared/services/api";


const RegisterCompanyForm = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    API.post('companies/register', data).then((response) => {
      console.log(response.data);
      Navigate("/login");
    });
  };
  return (

    <form className='register-form-container' onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        name='cif'
        placeholder='📝                         CIF'
        className='register-input'
        {...register('cif', {required: true})}
      />
      <input
        type='email'
        name='email'
        placeholder='📧                       Email'
        className='register-input'
        {...register('email', {required: true})}
      />
      <input
        type='password'
        name='password'
        placeholder='🔐                   Password'
        className='register-input'
        {...register('password', {required: true})}
      />
      <button className='signup-button' type='submit'>
        Registrarse
      </button>
    </form>

  );
};

export default RegisterCompanyForm;
