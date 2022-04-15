import React from 'react'
import {useForm} from 'react-hook-form'
import { API } from '../../shared/services/api';

const RegisterCompanyForm = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    API.post("companies/register", data).then((response) => {
        console.log(response.data)
    })
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" name="name" {...register("name", { required: true, minLength: 4 })} />
        <label>Cif</label>
        <input type="text" name="cif" {...register("cif", { required: true})} />
        <label>Email</label>
        <input type="email" name="email" {...register("email", { required: true})} />
        <label>Contraseña</label>
        {/* De 8 a 12, con un caracter especial y con una mayuscula */}
        <input type="password" name="password" {...register("password", { required: true})} />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterCompanyForm