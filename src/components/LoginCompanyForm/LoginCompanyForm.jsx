import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useIsAuthCompanyContext } from "../../shared/contexts/IsAuthCompanyContext";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

const LoginCompanyForm = () => {
  const { register, handleSubmit } = useForm();
  const { setIsAuthCompany } = useIsAuthCompanyContext();
  const { companyProfile, setCompanyProfile } = useProfileContext();

  const onSubmit = (data) => {
    API.post("/companies/login", data).then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data[0]);
      setIsAuthCompany(response.data[0]);
      setCompanyProfile({
        id: response.data[1]._id,
        name: response.data[1].name,
        email: response.data[1].email,
        cif: response.data[1].cif,
        info: {
          description: response.data[1].description,
          img: response.data[1].img,
          location: response.data[1].location,
          web: response.data[1].web,
          employees: response.data[1].employees,
        },
      });
      console.log(companyProfile);
    });
  };

  return (
    <>
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="cif"
            placeholder="📝 Cif"
            {...register("cif", { require: true })}
          />
          <input
            type="password"
            name="password"
            placeholder="🔐 Password"
            {...register("password", { require: true })}
          />
          <button>Entrar</button>
        </form>
      </div>
      <div className="register-div">
        <p>¿Aún no estas registrado?</p>
        <Link to="/registerCompany">
          <button className="sign-up">Aqui puedes registrarte</button>
        </Link>
      </div>
    </>
  );
};

export default LoginCompanyForm;
