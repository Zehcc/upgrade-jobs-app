import React from 'react'
import { Link } from 'react-router-dom'
import { useProfileContext } from '../../contexts/ProfileContext'

const UserNavbar = () => {
    const {userProfile} = useProfileContext()
  return (
    <nav>
    
        <Link to='/offers'>
        <div>Ofertas</div>
        </Link>
        <div>Mis candidaturas</div>
        <Link to={`/userProfile/${userProfile.id}`}>
        <div>Perfil</div>
        </Link>
    </nav>
  )
}

export default UserNavbar