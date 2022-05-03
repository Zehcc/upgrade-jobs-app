import React from "react";
import { useForm } from "react-hook-form";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const UserProfilePage = () => {
  const { register, handleSubmit } = useForm();
  const { userProfile, setUserProfile } = useProfileContext();
  const formData = new FormData();
  formData.append("cv", userProfile.cv[0]);
  const header = {
    "content-type": "multipart/form-data",
  }
  const onSubmit = (data) => {
    API.patch(`/users/${userProfile.id}`, data, formData, header).then(
      setUserProfile({
        id: userProfile.id,
        name: data.name,
        email: data.email,
        img: data.img,
        cv: data.cv,

      }),

    );
  };

  return (
    <>
      <UserNavbar />
      <div className='profile-img-container'>
        <img src={userProfile.img} alt={userProfile.id} />
      </div>
      <div className='profile-form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre</label>
          <input
            type='text'
            name='name'
            placeholder='Escribe tu nombre'
            defaultValue={userProfile.name}
            {...register("name", { required: true })}
          />
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Escribe tu email'
            defaultValue={userProfile.email}
            {...register("email", { required: true })}
          />
          <label>Foto</label>
          <input
            type='text'
            name='img'
            placeholder='Elige tu foto de perfil'
            defaultValue={userProfile.img}
            {...register("img", { required: false })}
          />
          <label>CV</label>
          <input
            type='file'
            name='cv'
            placeholder='Sube tu cv.pdf'
            defaultValue={userProfile.cv}
            {...register("cv", { required: false })}
          />
          <button>Guardar cambios</button>
        </form>
      </div>
    </>
  );
};

export default UserProfilePage;
