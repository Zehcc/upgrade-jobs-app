import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";
import ButtonLogout from "../../../components/ButtonLogout/ButtonLogout";
import { BsFillPersonFill as Profile } from "react-icons/bs";
import { FaBriefcase as Offers, FaSearch as Search } from "react-icons/fa";
import { RiBookmark3Fill as Applications } from "react-icons/ri";

const CompanyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { companyProfile } = useProfileContext();
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='company-navbar'>
      <Link to='/companyOffers'>
        <Offers size={30} className='nav-item' />
      </Link>
      <div className='dropdown'>
        <div className='img-container'>
          <img
            src={companyProfile.info.img}
            alt='company pic'
            type='button'
            onClick={handleButtonClick}
          />
        </div>
        <div className={`dropdown-submenu ${isOpen ? "show" : ""}`}>
          <ul className='drop-down-lu'>
            <li className='drop-down-li'>
              <Link to={`/companyProfile/${companyProfile.id}`}>
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

export default CompanyNavbar;
