import React, { useEffect, useState } from 'react';
import './AllDietPlans.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const AllDietPlans = () => {
  const [allDietPlans, setAllDietPlans] = useState([]);
  const [selectedDiet,setSelectedDiet]=useState([])
  const navigate=useNavigate()
  
  const dataDiets = JSON.parse(localStorage.getItem("plans"));
  useEffect(() => {
    if (dataDiets) {
      setAllDietPlans(dataDiets);
    }
  }, [dataDiets]);
  const selectDiet=(diet)=>{
    setSelectedDiet(diet)
    navigate('/exercisePractice',{state:diet})

  }

  

  return (
    <div className='mainDiet'>
      {allDietPlans.map((diet, index) => (
        <div className='dietPlans' key={index}>
          {diet.map((ele) => (
            <div className="dietBox" key={ele.time}>
              <img src={ele.img} alt="" />
              <p>purpose:{ele.purpose}</p>
              <p>Time:{ele.time}Sec</p>
            </div>
          ))}
        <button className='diet-btn' onClick={()=>selectDiet(diet)}>SelectDiet</button>
        </div>
      ))}
    </div>
  );
};

export default AllDietPlans;
