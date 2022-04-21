import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const UserApplicationSent = () => {
  const [message, setMessage] = useState('');

  const randomMessage = () => {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    if (randomNumber === 1) {
      setMessage('¡Enhorabuena!');
    }
    if (randomNumber === 2) {
      setMessage('¡Fantástico!');
    }
    if (randomNumber === 3) {
      setMessage('¡Genial!');
    }
    if (randomNumber === 4) {
      setMessage('¡Maravilloso!');
    }
  };

  useEffect(() => {
    randomMessage();
  }, []);

  return (
    <div className='application-page'>
      <img className='image-container' src='/assets/confirmed.png' alt='Application Sent' />
      <div className='message-container'>
        <div className='message'>
          <h2 className='message-title'>{message}</h2>
          <p className='message-text'>
            Tu CV se ha enviado correctamente para la vacante de VACANTE
          </p>
        </div>
        <Link className='see-offer-button' to='#'>
          Ver Oferta
        </Link>
        <Link className='see-all-offers' to='/offers'>
          <button className='see-all-offers_button'>Volver a todas las ofertas</button>
        </Link>
      </div>
    </div>
  );
};

export default UserApplicationSent;
