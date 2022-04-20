<<<<<<< HEAD
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { API } from '../../shared/services/api';
import { useIsAuthCompanyContext } from '../../shared/contexts/IsAuthCompanyContext';
import { useProfileContext } from '../../shared/contexts/ProfileContext';
=======

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useIsAuthContext } from "../../shared/contexts/IsAuthContext";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

>>>>>>> 38a30b130cd396387120965ef82a5f8c450c9ad3

const LoginCompanyForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
<<<<<<< HEAD
  const { setIsAuthCompany } = useIsAuthCompanyContext();
  const { setCompanyProfile } = useProfileContext();
=======
  const { setIsAuthCompany } = useIsAuthContext();
  const { setCompanyProfile } = useProfileContext();

>>>>>>> 38a30b130cd396387120965ef82a5f8c450c9ad3

  const onSubmit = (data) => {
    API.post('/companies/login', data).then((response) => {
      localStorage.setItem('token', response.data[0]);
      setIsAuthCompany(response.data[0]);
      setCompanyProfile({
        id: response.data[1]._id,
        name: response.data[1].name,
        email: response.data[1].email,
        cif: response.data[1].cif,
        info: {
          description: response.data[1].info.description,
          img: response.data[1].info.img,
          location: response.data[1].info.location,
          web: response.data[1].info.web,
          employees: response.data[1].info.employees,
        },
        offers: [response.data[1].offers],
      });
      navigate("/companyOffers");
    });
  };

  return (
    <>
      <div className="login-form-container">

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            name='cif'
            placeholder='📝                         CIF'
            {...register('cif', { require: true })}
          />
          <input
            type='password'
            name='password'
            placeholder='🔐                   Password'
            {...register('password', { require: true })}
          />
          <button>Entrar</button>
        </form>
      </div>
      <div className='register-div'>
        <p>¿Aún no estas registrado?</p>
        <Link to='/registerCompany'>
          <button className='sign-up'>Registrarse</button>
        </Link>
      </div>
    </>
  );
};

export default LoginCompanyForm;
