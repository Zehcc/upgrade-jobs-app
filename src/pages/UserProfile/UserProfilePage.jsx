import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const UserProfilePage = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { userProfile, setUserProfile } = useProfileContext();
  const [image, setImage] = useState(userProfile.img);
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
    const dataToDB = {
      id: userProfile.id,
      name: data.name,
      email: data.email,
      img: image,
      cv: data.cv,
      candidatures: userProfile.candidatures,
    };
    API.patch(`/users/${userProfile.id}`, dataToDB)
      .then(setUserProfile(dataToDB))
      .then(navigate(`/offers`));
  };

  return (
    <>
      <UserNavbar />
      <div className='profile-img-container'>
        <img src={image} alt={userProfile.id} />
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
              <input type='file' name='img' onChange={uploadImage} />
            </>
          )}
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
          <label>CV</label>
          <input
            type='text'
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
