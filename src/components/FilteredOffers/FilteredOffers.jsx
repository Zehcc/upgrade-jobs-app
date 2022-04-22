import React from 'react'

const FilteredOffers = ({ offer }) => {
    console.log(offer)
    return (
        <div><p>{offer.title}</p></div>
    )
}

export default FilteredOffers