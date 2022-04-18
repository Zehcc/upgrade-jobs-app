import React from 'react'
import { Link } from 'react-router-dom';
import { useProfileContext } from '../../shared/contexts/ProfileContext'

const CompanyOffers = () => {

    const {companyProfile, setCompanyProfile} = useProfileContext();
    localStorage.setItem('profile', JSON.stringify(companyProfile))
    console.log(companyProfile)
  return (
    <div>
        <Link to='/createOffer'>
        <button>Nueva oferta</button>
        </Link>
    </div>
  )
}

export default CompanyOffers