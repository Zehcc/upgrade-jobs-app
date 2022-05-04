import React, {useContext} from 'react';

export const GestionContext = React.createContext();
export const useGestionContext = () => {
  return useContext(GestionContext);
};

const GestionProvider = ({children}) => {
  let creationDate = (date) => {
    const creationDate = new Date(date);
    const today = new Date();

    let creationDateMS = creationDate.getTime() - creationDate.getTimezoneOffset() * (1000 * 60);
    let todayMS = today.getTime() - today.getTimezoneOffset() * (1000 * 60);
    const days = Math.floor((todayMS - creationDateMS) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((todayMS - creationDateMS) / (1000 * 60 * 60));
    if (hours < 1) {
      return `Creada hace menos de 1 hora`;
    } else if (days < 1) {
      return `Creada hace ${hours} horas`;
    } else {
      return `Creada hace ${days} días`;
    }
  };

  let updatedDate = (date) => {
    const updatedDate = new Date(date);
    const today = new Date();

    let updatedDateMS = updatedDate.getTime() - updatedDate.getTimezoneOffset() * (1000 * 60);
    let todayMS = today.getTime() - today.getTimezoneOffset() * (1000 * 60);
    const days = Math.floor((todayMS - updatedDateMS) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((todayMS - updatedDateMS) / (1000 * 60 * 60));

    if (days < 1) {
      return `La empresa ha gestionado cvs hace ${hours} horas`;
    } else {
      return `La empresa ha gestionado cvs hace ${days} días`;
    }
  };
  return (
    <GestionContext.Provider value={{creationDate, updatedDate}}>
      {children}
    </GestionContext.Provider>
  );
};

export default GestionProvider;
