import {useForm} from 'react-hook-form';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {API} from '../../shared/services/api';
import {useIsAuthUserContext} from '../../shared/contexts/IsAuthUserContext';

const LoginUserForm = () => {
  const {register, handleSubmit} = useForm();
  let navigate = useNavigate();
  const {setIsAuthUser} = useIsAuthUserContext();

  const onSubmit = (data) => {
    API.post('/users/login', data).then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data[0]);
      setIsAuthUser(response.data[0]);
      navigate('/offers');
    });
  };

  return (
    <>
      <div className='login-form-user'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            name='email'
            placeholder='email'
            {...register('email', {required: true})}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            {...register('password', {required: true})}
          />
          <button>Sign in</button>
        </form>
      </div>
      <Link to='/registerUser'>
        <button className='sign-up'>Sign up</button>
      </Link>
    </>
  );
};

export default LoginUserForm;
