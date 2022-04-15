import React, { useState } from 'react'
import LoginCompanyForm from '../../components/LoginCompanyForm/LoginCompanyForm'
import LoginUserForm from '../../components/LoginUserForm/LoginUserForm'

const LoginUserPage = () => {

  const [userType, setUserType] = useState('user');

  const chooseType = (type) => {
    setUserType(type)
  }
  return (
    <>
    <button onClick={()=> chooseType('user')}>Soy usuario</button>
    <button onClick={()=> chooseType('company')}>Soy empresa</button>
    {userType === 'user' ? <LoginUserForm/>
    : <LoginCompanyForm/>}
    
    
    
    </>
  )
}

export default LoginUserPage