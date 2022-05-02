import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../shared/components/CompanyNavbar/CompanyNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const CompanyProfilePage = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { companyProfile, setCompanyProfile } = useProfileContext();
  const [image, setImage] = useState(companyProfile.info.img);
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "zehcimages");
    axios
      .post("https://api.cloudinary.com/v1_1/dzrcd1gpb/image/upload", data)
      .then((response) => {
        setImage(response.data.secure_url);
        changeShow();
      });
  };
  const onSubmit = (data) => {
    console.log(companyProfile.offers);
    const dataToDB = {
      id: companyProfile.id,
      name: data.name,
      email: data.email,
      cif: data.cif,
      info: {
        description: data.description,
        img: image,
        location: data.location,
        web: data.web,
        employees: data.employees,
      },
      offers: companyProfile.offers,
    };
    console.log(dataToDB);
    API.patch(`/companies/${companyProfile.id}`, dataToDB)
      .then(setCompanyProfile(dataToDB))
      .then(navigate(`/companyOffers`));
  };

  return (
    <>
      <CompanyNavbar />
      <div className='company-logo-container'>
        <img src={image} alt={companyProfile.name} />
      </div>
      <div className='profile-form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!show ? (
            <button className='change-image' onClick={changeShow}>
              Cambiar imagen
            </button>
          ) : (
            <>
              <label>Selecciona tu nueva imagen</label>
              <input type='file' name='info.img' onChange={uploadImage} />
            </>
          )}
          <label>Nombre</label>
          <input
            type='text'
            name='name'
            placeholder='Escribe tu nombre'
            defaultValue={companyProfile.name}
            {...register("name", { required: true })}
          />
          <label>CIF</label>
          <input
            type='text'
            name='cif'
            placeholder='CIF'
            defaultValue={companyProfile.cif}
            {...register("cif", { required: false })}
          />
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Escribe tu email'
            defaultValue={companyProfile.email}
            {...register("email", { required: true })}
          />
          <label>Descripción</label>
          <input
            type='text'
            name='info.description'
            placeholder='description'
            defaultValue={companyProfile.info.description}
            {...register("info.description", { required: false })}
          />
          <label>Localización</label>
          <input
            type='text'
            name='info.location'
            placeholder='location'
            defaultValue={companyProfile.info.location}
            {...register("info.location", { required: false })}
          />
          <label>Web</label>
          <input
            type='url'
            name='info.web'
            placeholder='web'
            defaultValue={companyProfile.info.web}
            {...register("info.web", { required: false })}
          />
          <label>Empleados</label>
          <input
            type='number'
            name='info.employees'
            placeholder='employees'
            defaultValue={companyProfile.info.employees}
            {...register("info.employees", { required: false })}
          />
          <button>Guardar cambios</button>
        </form>
      </div>
    </>
  );
};

export default CompanyProfilePage;
