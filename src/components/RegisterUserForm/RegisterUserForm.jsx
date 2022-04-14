import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { API } from "../../shared/services/api";


const RegisterUserForm = () => {
  let navigate = useNavigate()
  const { register, handleSubmit, } = useForm()
  const onSubmit = (data) => {
    API.post("/users", JSON.stringify(data)).then((response) => {
      console.log(response)
      navigate("")
    })
  }

  return (
    <div className='registerForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type='name' name='name' placeholder='Escribe aqui tu nombre'{...register("name", { requires: true, minLength: 2 })} />
        <label>Correo electronico</label>
        <input type='email' name='email' placeholder='Escribe aqui tu correo electronico'{...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2, 4}$/i })} />
        <label>Contraseña</label>
        <input type='password' name='password' placeholder='Escribe aqui tu contraseña'{...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })} />
        <button>Register</button>
      </form>


    </div>
  )
}

export default RegisterUserForm