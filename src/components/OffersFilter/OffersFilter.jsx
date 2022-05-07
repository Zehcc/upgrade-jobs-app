import React from "react";
import { useForm } from "react-hook-form";

const OffersFilter = ({ offers, setFilteredOffers }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const filtered = offers.filter(
      (offer) =>
        offer.title.toLowerCase().includes(data.search.toLowerCase()) ||
        offer.company.name.toLowerCase() === data.search.toLowerCase() ||
        offer.location.toLowerCase().includes(data.search.toLowerCase()) ||
        offer.category.toLowerCase().includes(data.search.toLowerCase())
    );
    if (filtered.length && data.search.length) {
      setFilteredOffers(filtered);
      reset({
        search: "",
      });
    } else {
      setFilteredOffers([]);
      reset({
        search: "",
      });
      alert("No offers found");
    }
  };

  return (
    <>
      <form className='main-filter' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='filter'
          type='text'
          name='search'
          placeholder='Busca por compañía, categoría, ciudad...'
          {...register("search")}
        />
      </form>
    </>
  );
};

export default OffersFilter;
