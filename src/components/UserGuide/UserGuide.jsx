import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const GuideHome = () => {
  let navigate = useNavigate();
  const dataText = [
    {
      title: '¡ El primer paso en tu búsqueda de empleo !',
      text: 'Crea tu perfil profesional y sube tu CV a nuestra plataforma',
    },
    {
      text: 'Empieza a aplicar a las ofertas que se adaptan a lo que estás buscando. Puedes filtrar por empresa o puesto',
    },
    {
      text: '¡ Podrás ver el estado de tus candidaturas y el proceso en el que te encuentras dentro de cada empresa !',
    },
  ];
  const [data, setData] = useState(0);
  const next = () => {
    setData(data + 1);
  };
  const toRegisterUser = () => {
    navigate('/registerUser');
  };
  return (
    <div className='guide'>
      {data === 0 && <img className='guide__image' src='/assets/Resume.png' alt='profile' />}
      {data === 1 && <img className='guide__image' src='/assets/Jobhunt.png' alt='profile' />}
      {data === 2 && (
        <img className='guide__image' src='/assets/contact-companies.png' alt='profile' />
      )}
      <div className='guide__content'>
        {dataText[data].title && <h3>{dataText[data].title}</h3>}
        <p>{dataText[data].text}</p>
      </div>
      <div className='guide__buttons'>
        {data < 2 && (
          <button className='guide-btn' onClick={next}>
            Siguiente
          </button>
        )}
        {data === 2 && (
          <button className='guide-btn green' onClick={toRegisterUser}>
            Comenzar
          </button>
        )}
      </div>
    </div>
  );
};

export default GuideHome;
