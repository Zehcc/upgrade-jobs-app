import React from 'react'
import { useForm } from 'react-hook-form';
import { useProfileContext } from '../../shared/contexts/ProfileContext';
import { API } from '../../shared/services/api';

const CompanyProfilePage = () => {
    const { register, handleSubmit } = useForm();
    const {companyProfile, setCompanyProfile} = useProfileContext();
    const onSubmit = (data) => {
        API.patch(`/companies/${companyProfile.id}`, data).then((response) => {
            console.log(data)
            setCompanyProfile({
                id: companyProfile.id,
                name: data.name,
                email: data.email,
                cif: data.cif,
                info: {
                    description: data.description,
                    img: data.img,
                    location: data.location,
                    web: data.web,
                    employees: data.employees,
                  }
              });
            
        });
      };
    
  return (
      <div className='profile-form-container'>
    <form  onSubmit={handleSubmit(onSubmit)}>
    <label>Nombre</label>
    <input
      type="text"
      name="name"
      placeholder="Escribe tu nombre"
      defaultValue={companyProfile.name}
      {...register("name", { required: true })}
    />
    <label>CIF</label>
    <input
      type="text"
      name="cif"
      placeholder="CIF"
      defaultValue={companyProfile.cif}
      {...register("cif", { required: false })}
    />
    <label>Email</label>
    <input
      type="email"
      name="email"
      placeholder="Escribe tu email"
      defaultValue={companyProfile.email}
      {...register("email", { required: true })}
    />
    <label>Imagen</label>
    <input
      type="text"
      name="info.img"
      placeholder="imagen"
      defaultValue={companyProfile.imagen}
      {...register("info.img", { required: false })}
    />
    <label>Descripción</label>
    <input
      type="text"
      name="info.description"
      placeholder="description"
      defaultValue={companyProfile.description}
      {...register("info.description", { required: false })}
    />
    <label>Localización</label>
    <input
      type="text"
      name="info.location"
      placeholder="location"
      defaultValue={companyProfile.location}
      {...register("info.location", { required: false })}
    />
    <label>Web</label>
    <input
      type="url"
      name="info.web"
      placeholder="web"
      defaultValue={companyProfile.web}
      {...register("info.web", { required: false })}
    />
    <label>Empleados</label>
    <input
      type="number"
      name="info.employees"
      placeholder="employees"
      defaultValue={companyProfile.employees}
      {...register("info.employees", { required: false })}
    />
    <button>Guardar cambios</button>
  </form>
  </div>
  )
}

export default CompanyProfilePage