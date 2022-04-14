import React from 'react'
import { useForm } from 'react-hook-form';
import { API } from "../../shared/services/api";

const RegisterUserForm = () => {
  
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    API.post("/users/register", JSON.stringify(data)).then((response) => {
      console.log(response)
    })
  }
  return (
    <div className='registerForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type='text' name='name' placeholder='Escribe aqui tu nombre'{...register("name", { requires: true, minLength: 2 })} />
        <label>Email</label>
        <input type='email' name='email' placeholder='Escribe aqui tu correo electronico'{...register("email", { required: true})} />
        <label>Contraseña</label>
        <input type='password' name='password' placeholder='Escribe aqui tu contraseña'{...register("password", { required: true})} />
        <button>Register</button>
      </form>


    </div>
  )
}

export default RegisterUserForm