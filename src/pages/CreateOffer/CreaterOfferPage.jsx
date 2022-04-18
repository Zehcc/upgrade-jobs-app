import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const CreaterOfferPage = () => {
  const { companyProfile } = useProfileContext();
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    API.post("/offers", data).then((response) => {
      API.get(`companies/${companyProfile.id}`).then((res) => {
        res.data.offers = [...res.data.offers, response.data._id];
        const offer = {
          offers: res.data.offers,
        };
        API.patch(`/companies/${companyProfile.id}`, offer).then(
          navigate("/companyOffers")
        );
      });
    });
  };
  return (
    <div>
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
          name="description"
          placeholder="Descripción"
          {...register("description", { require: true })}
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
        <input
          type="text"
          name="company"
          value={companyProfile.id}
          {...register("company", { require: true })}
        />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default CreaterOfferPage;
