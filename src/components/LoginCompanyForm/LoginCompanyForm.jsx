import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {API} from '../../shared/services/api';
import {useIsAuthContext} from '../../shared/contexts/IsAuthContext';
import {useProfileContext} from '../../shared/contexts/ProfileContext';

const LoginCompanyForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const {setIsAuthCompany} = useIsAuthContext();
  const {setCompanyProfile} = useProfileContext();

  const onSubmit = (data) => {
    API.post('/companies/login', data).then((response) => {
      console.log(response.data);
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
      });
      navigate('/companyOffers');
    });
  };

  return (
    <>
      <div className='login-form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            name='cif'
            placeholder='📝                         CIF'

            className='login-input'
            {...register('cif', {require: true})}

          />
          <input
            type='password'
            name='password'
            placeholder='🔐                   Password'

            className='login-input'
            {...register('password', {require: true})}

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
