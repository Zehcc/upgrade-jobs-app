import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";

const RegisterCompanyForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const companyToDB = {
      id: "",
      name: "",
      email: data.email,
      password: data.password,
      cif: data.cif,
      info: {
        description: "",
        img: "https://res.cloudinary.com/dd3vgq4ks/image/upload/v1650619369/Assets-upgradejobs/user-gf5a686eee_1280_aowjo4.png",
        location: "",
        web: "",
        employees: "",
      },
    };
    API.post("companies/register", companyToDB).then((response) => {
      console.log(response.data);
      navigate("/login");
    });
  };
  return (
    <form className='register-form-container' onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        name='cif'
        placeholder='📝                           CIF'
        className='register-input'
        {...register("cif", { required: true })}
      />
      <input
        type='email'
        name='email'
        placeholder='📧                         Email'
        className='register-input'
        {...register("email", { required: true })}
      />
      <input
        type='password'
        name='password'
        placeholder='🔐                   Contraseña'
        className='register-input'
        {...register("password", { required: true })}
      />
      <button className='signup-button' type='submit'>
        Registrarse
      </button>
      <Link className='back-button' to='/login'>
        Volver
      </Link>
    </form>
  );
};

export default RegisterCompanyForm;
