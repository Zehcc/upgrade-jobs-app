import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { Link, useNavigate } from "react-router-dom";
const RegisterUserForm = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const userToDB = {
      id: "",
      name: data.name,
      email: data.email,
      password: data.password,
      img: "https://us.123rf.com/450wm/metelsky/metelsky1809/metelsky180900220/109815466-perfil-de-avatar-de-hombre-silueta-de-rostro-masculino-o-icono-aislado-sobre-fondo-blanco-ilustraci%C3%B3.jpg?ver=6",
      cv: "",
      candidatures: [],
    };
    API.post("/users/register", userToDB).then(navigate("/login"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='register-form-container'>
      <input
        type='text'
        name='name'
        placeholder='🔤                       Nombre'
        className='register-input'
        {...register("name", { requires: true, minLength: 2 })}
      />
      <input
        type='email'
        name='email'
        placeholder='📧                         Email'
        className='register-input'
        {...register("email", { required: true })}
      />
      <input
        type='password'
        name='password'
        placeholder='🔐                   Contraseña'
        className='register-input'
        {...register("password", { required: true })}
      />
      <button className='signup-button'>Registrarse</button>
      <Link className='back-button' to='/login'>
        Log in
      </Link>
    </form>
  );
};

export default RegisterUserForm;
