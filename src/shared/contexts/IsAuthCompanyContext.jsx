import React, { useState, useContext } from 'react'

export const IsAuthCompanyContext = React.createContext();

export const useIsAuthCompanyContext = () => {
    return useContext(IsAuthCompanyContext);
}

const IsAuthCompanyProvider = ({children}) => {
    const [isAuthCompany, setIsAuthCompany] = useState(localStorage.getItem("token") || null);
  return (
    <IsAuthCompanyContext.Provider value={{isAuthCompany, setIsAuthCompany}}>
        {children}
    </IsAuthCompanyContext.Provider>
  )
}

export default IsAuthCompanyProvider