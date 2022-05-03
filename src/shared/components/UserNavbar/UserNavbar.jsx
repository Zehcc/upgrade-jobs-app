import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ButtonLogout from '../../../components/ButtonLogout/ButtonLogout';
import {useProfileContext} from '../../contexts/ProfileContext';
import {RiSettings4Fill as Settings} from 'react-icons/ri';
import {FaBriefcase as Briefcase, FaSearch as Search} from 'react-icons/fa';

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const {userProfile} = useProfileContext();
  return (
    <nav className='user-navbar'>
      <Link to='/offers'>
        <Search size={30} className='nav-item' />
      </Link>
      <Link to={`/candidatures/${userProfile.id}`}>
        <Briefcase size={30} className='nav-item' />
      </Link>
      <div className='dropdown'>
        <Settings size={40} className='dropbtn' type='button' onClick={handleButtonClick} />
        <div className={`dropdown-submenu ${isOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to={`/userProfile/${userProfile.id}`}>
                <div className='nav-item'>Perfil</div>
              </Link>
            </li>
            <li>
              <ButtonLogout className='nav-item' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
