import React from 'react'
import {useForm} from 'reac-hook-form'

const RegisterCompanyForm = () => {
  const {register, handleSubmit} = useForm();
  return (
    <div>
      <form >
        <label>Nombre</label>
        <input type="text" name="firstName" {...register("firstName", { required: true, minLength: 4 })} />
        <label>Cif</label>
        <input type="text" name="firstName" {...register("firstName", { required: true, minLength: 4 })} />
        <label>Email</label>
        <input type="text" name="firstName" {...register("firstName", { required: true, minLength: 4 })} />
        <label>Contraseña</label>
        <input type="text" name="firstName" {...register("firstName", { required: true, minLength: 4 })} />
        
      </form>
    </div>
  )
}

export default RegisterCompanyForm