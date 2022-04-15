import React, { useState } from 'react'
import LoginCompanyForm from '../../components/LoginCompanyForm/LoginCompanyForm'
import LoginUserForm from '../../components/LoginUserForm/LoginUserForm'

const LoginUserPage = () => {

  const [userType, setUserType] = useState('user');

  const chooseType = (type) => {
    setUserType(type)
  }
  return (
    <div className='login-container'>
      <div className='img-container'>
        <img src="/login2.jpg" alt="Img" />
      </div>
      <div className='button-type-container'>
        {userType === 'user' ? 
          <p>¿No eres usuario? <button className='choose-type-btn' onClick={()=> chooseType('company')}>Haz click aquí</button> para ir al Login de empresas</p>
        : <p>¿No eres empresa? <button className='choose-type-btn'  onClick={()=> chooseType('user')}>Haz click aquí</button> para ir al Login de usuarios</p>
       }
      </div>
      {userType === 'user' ? <LoginUserForm/>
      : <LoginCompanyForm/>}
    </div>
  )
}

export default LoginUserPage