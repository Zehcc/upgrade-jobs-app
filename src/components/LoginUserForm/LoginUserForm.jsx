import { useForm } from "react-hook-form";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import { useIsAuthContext } from "../../shared/contexts/IsAuthContext";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

const LoginUserForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setIsAuthUser } = useIsAuthContext();
  const { setUserProfile } = useProfileContext();

  const onSubmit = (data) => {
    API.post("/users/login", data).then((response) => {
      localStorage.setItem("token", response.data[0]);
      setIsAuthUser(response.data[0]);
      setUserProfile({
        id: response.data[1]._id,
        name: response.data[1].name,
        email: response.data[1].email,
        img: response.data[1].img,
        cv: response.data[1].cv,
        candidatures: response.data[1].candidatures,
      });
      navigate(`/offers`);
    });
  };
  return (
    <>
      <div className='login-form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            name='email'
            placeholder='📧                       Email'
            {...register("email", { required: true })}
          />
          <input
            type='password'
            name='password'
            placeholder='🔐                   Password'
            {...register("password", { required: true })}
          />
          <button>Entrar</button>
        </form>
      </div>
      <div className='register-div'>
        <p>¿Aún no estas registrado?</p>
        <Link to='/home'>
          <button>Registrarse</button>
        </Link>
      </div>
    </>
  );
};

export default LoginUserForm;
