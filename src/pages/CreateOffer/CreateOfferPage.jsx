import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";
import { cities, categories } from "../../GuideData/data";

const CreateOfferPage = () => {
  const { companyProfile } = useProfileContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    <div className='form-container'>
      <h4>Rellena todos los campos para crear una nueva oferta</h4>
      <form onSubmit={handleSubmit(onSubmit)} className='create-offer'>
        <input
          type='text'
          name='title'
          placeholder='Título de la oferta'
          className='create-offer-input'
          {...register("title", {
            required: { value: true, message: "Campo obligatorio" },
          })}
        />
        {errors.title && (
          <p className='error-message'>{errors.title.message}</p>
        )}
        <input
          list='cities'
          name='location'
          className='create-offer-input'
          placeholder='Localización'
          {...register("location", {
            required: { value: true, message: "Campo obligatorio" },
          })}
        />
        {errors.location && (
          <p className='error-message'>{errors.location.message}</p>
        )}
        <datalist id='cities'>
          {cities.map((city, index) => (
            <option key={index} value={city}></option>
          ))}
        </datalist>
        <input
          list='categories'
          name='category'
          placeholder='Categoría'
          className='create-offer-input'
          {...register("category", {
            required: { value: true, message: "Campo obligatorio" },
          })}
        />
        {errors.category && (
          <p className='error-message'>{errors.category.message}</p>
        )}
        <datalist id='categories'>
          {categories.map((category, index) => (
            <option key={index} value={category}></option>
          ))}
        </datalist>
        <input
          type='number'
          name='vacants'
          placeholder='Numero de vacantes'
          className='create-offer-input'
          {...register("vacants", {
            required: { value: true, message: "Campo obligatorio" },
          })}
        />
        {errors.vacants && (
          <p className='error-message'>{errors.vacants.message}</p>
        )}
        <textarea
          className='description'
          type='text'
          name='description'
          placeholder='Descripción'
          {...register("description", {
            required: { value: true, message: "Campo obligatorio" },
          })}
        />
        {errors.description && (
          <p className='error-message'>{errors.description.message}</p>
        )}
        <input
          className='hidden'
          type='text'
          name='company'
          value={companyProfile.id}
          {...register("company", { require: true })}
        />
        <button>Crear oferta</button>
        <Link to='/companyOffers'>
          <button className='back-button'>Volver</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateOfferPage;
