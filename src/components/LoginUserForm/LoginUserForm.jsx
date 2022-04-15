import React from 'react'
import { Link } from 'react-router-dom'

const LoginUserForm = () => {
  return (
    <>
    <div>LoginUserForm</div>
    <Link to="/registerUser">
    <button>Ir a registro</button>
    </Link>
    </>
  )
}

export default LoginUserForm