import React from 'react'
import RegisterUserForm from '../../components/RegisterUserForm/RegisterUserForm'

const RegisterUserPage = () => {
  return (
    <div className='register-page'>
      <h4>Rellena todos los campos para completar el registro</h4>
      <RegisterUserForm/>
    </div>
  )
}

export default RegisterUserPage