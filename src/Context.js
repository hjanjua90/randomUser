import React, {useState,useContext} from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [users,setUsers] = useState([])

    const setusersData = (arr) =>{
    setUsers(arr)
  }
    const getAddress = (loc) => {
    return `${loc.street.number} ${loc.street.name} , ${loc.city} , ${loc.state}, ${loc.coordinates.postcode}, ${loc.country}`
}
const makeName = (name) => {
    return `${name.title} ${name.first} ${name.last}`
}

    return (
    <AppContext.Provider 
    value={{users,setusersData,makeName,getAddress}}>
    {children}
    </AppContext.Provider>)
}
export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}