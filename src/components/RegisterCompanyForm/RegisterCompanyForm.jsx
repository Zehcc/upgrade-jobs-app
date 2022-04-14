import React from 'react'
import {useForm} from 'reac-hook-form'
import { API } from '../../shared/services/api';

const RegisterCompanyForm = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    API.post("/companies/register", JSON.stringify(data)).then((response) => {
        console.log(response)
    })
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" name="name" {...register("firstName", { required: true, minLength: 4 })} />
        <label>Cif</label>
        <input type="text" name="cif" {...register("cif", { required: true, minLength: 4 })} />
        <label>Email</label>
        <input type="text" name="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
        <label>Contraseña</label>
        {/* De 8 a 12, con un caracter especial y con una mayuscula */}
        <input type="text" name="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })} />
      </form>
    </div>
  )
}

export default RegisterCompanyForm