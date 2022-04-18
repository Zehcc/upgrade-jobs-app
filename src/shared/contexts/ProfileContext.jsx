import React, { useContext, useState } from 'react'

export const ProfileContext = React.createContext();

export const useProfileContext = () => {
    return useContext(ProfileContext)
}


const ProfileProvider = ({children}) => {

    const [userProfile, setUserProfile] = useState({
        id: '',
        name: '',
        email: '',
        img: ''
    })

    const [companyProfile, setCompanyProfile] = useState(JSON.parse(localStorage.getItem('profile')) ||
        {
            id: '',
            name: '',
            email: '',
            cif: '',
            info: 
                {
                    description: '',
                    img: '',
                    location: '',
                    web: '',
                    employees: ''
                }
        }
    )

  return (
    <ProfileContext.Provider value={{userProfile, setUserProfile, companyProfile, setCompanyProfile}}>
        {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider