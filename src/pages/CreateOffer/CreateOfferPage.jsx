import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const CreateOfferPage = () => {
  const { companyProfile } = useProfileContext();
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    API.post("/offers", data).then((response) => {
      API.get(`companies/${companyProfile.id}`).then((res) => {
        const updatedOffers = [...res.data.offers, response.data._id];
        const offer = {
          offers: updatedOffers,
        };
        API.patch(`/companies/${companyProfile.id}`, offer).then(
          navigate("/companyOffers")
        );
      });
    });
  };
  return (
    <div className="form-container">
      <h4>Rellena todos los campos para crear una nueva oferta</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="title"
          placeholder="Título de la oferta"
          {...register("title", { require: true })}
        />
        <input
          type="text"
          name="location"
          placeholder="Localización de la oferta"
          {...register("location", { require: true })}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          {...register("category", { require: true })}
        />
        <input
          type="number"
          name="vacants"
          placeholder="Numero de vacantes"
          {...register("vacants", { require: true })}
        />
        <textarea
        className="description"
          type="text"
          name="description"
          placeholder="Descripción"
          {...register("description", { require: true })}
        />
        <input
          className="hidden"
          type="text"
          name="company"
          value={companyProfile.id}
          {...register("company", { require: true })}
        />
        <button>Crear oferta</button>
      </form>
    </div>
  );
};

export default CreateOfferPage;
