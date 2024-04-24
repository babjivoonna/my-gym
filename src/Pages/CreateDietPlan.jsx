import React, { useState,useContext, useEffect } from 'react'
import './CreateDietPlan.css'
import { exerciseData } from '../data/exerciseData'
import {StoreContext} from '../context/ContextProvider'
import {useNavigate} from 'react-router-dom'

const CreateDietPlan = () => {
  const [allDietExercise,setAllDietExercise]=useState([])
  const [id,setId]=useState(1)
  const [dietExercise,setDietExercise]=useState({img:'',time:'',purpose:''})
  const navigate=useNavigate()
 
  const clickHandler=(id)=>{
    const exercise=exerciseData.find((ele)=>ele.id===id)
    const data={...dietExercise}
    data.img=exercise.img
    setAllDietExercise((prev)=>[...prev,data])
    setDietExercise({img:'',time:'',purpose:''})
  }
  const setFullDiet=()=>{
    const dataDiets=JSON.parse(localStorage.getItem("plans"))||[]
    if (allDietExercise.length > 0) {
          localStorage.setItem("plans",JSON.stringify([...dataDiets,allDietExercise]));
          setAllDietExercise([])
          navigate("/")
        }
  }

console.log({allDietExercise})
  return (
    <div className="createDiet" id='/createDietPlan'>
      <div className='diet'>
    
        {
          exerciseData.map((exe,index)=>{
            return(
              <div key={index} className='diet-box'>
                <img src={exe.img} alt="" />
                <p>{exe.name}</p>
               <section> <p>Purpose:</p> <input  onChange={(e)=>setDietExercise({...dietExercise,purpose:e.target.value})} type="text" /></section>
               <section> <p>Time:</p> <input  onChange={(e)=>setDietExercise({...dietExercise,time:e.target.value})} type="text" /></section>
                <button className='diet-btn' onClick={()=>clickHandler(exe.id)}>Add Exercise</button>
              </div>
            )
          })
        }
        <div style={{width:"20rem",height:"20rem", display:"flex",alignItems:'center' ,justifyContent:"center"}}>
          <button  className='diet-btn' onClick={setFullDiet}>Add Full Diet</button>
        </div>
     
      </div>
    </div>
  )
}

export default CreateDietPlan
