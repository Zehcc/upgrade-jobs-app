import React, { useState, useContext } from 'react'

export const IsAuthContext = React.createContext();

export const useIsAuthContext = () => {
    return useContext(IsAuthContext);
}

const IsAuthProvider = ({children}) => {
    const [isAuthUser, setIsAuthUser] = useState(localStorage.getItem('token') || null);
    const [isAuthCompany, setIsAuthCompany] = useState(localStorage.getItem('token') || null);

  return (
    <IsAuthContext.Provider value={{isAuthUser, setIsAuthUser, isAuthCompany, setIsAuthCompany}}>
        {children}
    </IsAuthContext.Provider>
  )
}

export default IsAuthProvider