import React,{createContext, useEffect, useState}from 'react'
// import AllDietPlans from '../Components/Diets/AllDietPlans'

export const StoreContext=createContext()
const ContextProvider = (props) => {
    const [allDietPlans,setAllDietPlans]=useState([])
    
    const values={
      setAllDietPlans,
      allDietPlans
    }
  return (
    <StoreContext.Provider value={values}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default ContextProvider
