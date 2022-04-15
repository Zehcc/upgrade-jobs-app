import React from 'react';
import { Link } from 'react-router-dom';

const LoginCompanyForm = () => {
  
  return (
  <>
  <div>Login company
  </div>
  <Link to="/registerCompany">
    <button>Ir a registro</button>
  </Link>
  </>
  )
};

export default LoginCompanyForm;
