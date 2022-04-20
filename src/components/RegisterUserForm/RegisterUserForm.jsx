
import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useNavigate } from "react-router-dom";
const RegisterUserForm = () => {
  let navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    API.post('/users/register', JSON.stringify(data)).then((response) => {
      console.log(response);
      navigate("/login")
    });
  };
  return (

    <form onSubmit={handleSubmit(onSubmit)} className='register-form-container'>
      <input
        type='text'
        name='name'
        placeholder='🔤                     Nombre'
        className='register-input'
        {...register('name', {requires: true, minLength: 2})}
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
      <button className='signup-button'>Registrarse</button>
    </form>

  );
};

export default RegisterUserForm;
