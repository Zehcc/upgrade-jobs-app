import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
const RegisterCompanyForm = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    API.post("companies/register", JSON.stringify(data)).then((response) => {
      console.log(response);
      navigate("/login");
    });
  };
  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="cif"
          placeholder="Cif"
          {...register("cif", { required: true })}
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
        <button type="submit">Registrate!</button>
      </form>
    </div>
  );
};

export default RegisterCompanyForm;
