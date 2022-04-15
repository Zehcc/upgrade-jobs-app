import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useNavigate } from "react-router-dom";
const RegisterUserForm = () => {
  let navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    API.post("/users/register", JSON.stringify(data)).then((response) => {
      console.log(response);
      navigate("/login")
    });
  };
  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          {...register("name", { requires: true, minLength: 2 })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        <button>Resgístrate!</button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
