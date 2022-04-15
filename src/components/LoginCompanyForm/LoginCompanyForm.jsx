import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useIsAuthCompanyContext } from "../../shared/contexts/IsAuthCompanyContext";

const LoginCompanyForm = () => {
  const { register, handleSubmit } = useForm();
  const { setIsAuthCompany } = useIsAuthCompanyContext();

  const onSubmit = (data) => {
    API.post("/companies/login", data).then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data[0])
      setIsAuthCompany(response.data[0])
    });
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>CIF</label>
          <input
            type="text"
            name="cif"
            {...register("cif", { require: true })}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { require: true })}
          />
          <button>Login</button>
        </form>
      </div>
      <Link to="/registerCompany">
        <button>Ir a registro</button>
      </Link>
    </>
  );
};

export default LoginCompanyForm;
