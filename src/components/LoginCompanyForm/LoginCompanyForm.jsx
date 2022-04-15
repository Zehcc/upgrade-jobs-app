import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useIsAuthCompanyContext } from "../../shared/contexts/IsAuthCompanyContext";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

const LoginCompanyForm = () => {
  const { register, handleSubmit } = useForm();
  const { setIsAuthCompany } = useIsAuthCompanyContext();
  const {companyProfile, setCompanyProfile} = useProfileContext();

  const onSubmit = (data) => {
    API.post("/companies/login", data).then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data[0])
      setIsAuthCompany(response.data[0])
      setCompanyProfile(
        {
          id: response.data[1]._id,
          name: response.data[1].name,
          email: response.data[1].email,
          cif: response.data[1].cif,
          info: 
              {
                  description: response.data[1].description,
                  img: response.data[1].img,
                  location: response.data[1].location,
                  web: response.data[1].web,
                  employees: response.data[1].employees
              }
      })
      console.log(companyProfile)
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
