import React, { useState, useContext } from 'react'

export const IsAuthUserContext = React.createContext();

export const useIsAuthUserContext = () => {
    return useContext(IsAuthUserContext);
}

const IsAuthUserProvider = ({children}) => {
    const [isAuthUser, setIsAuthUser] = useState(localStorage.getItem("token") || null);
  return (
    <IsAuthUserContext.Provider value={{isAuthUser, setIsAuthUser}}>
        {children}
    </IsAuthUserContext.Provider>
  )
}

export default IsAuthUserProvider