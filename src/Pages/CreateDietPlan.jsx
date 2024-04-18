import React, { useState } from 'react'
import './CreateDietPlan.css'
import { exerciseData } from '../data/exerciseData'

const CreateDietPlan = () => {
  const [allDietExercise,setAllDietExercise]=useState([])
  const [id,setId]=useState(1)
  const [dietExercise,setDietExercise]=useState({img:'',time:'',purpose:''})
 
  const clickHandler=(id)=>{
    const exercise=exerciseData.find((ele)=>ele.id===id)
    const data={...dietExercise}
    data.img=exercise.img
    setAllDietExercise((prev)=>[...prev,data])
    setDietExercise({img:'',time:'',purpose:''})
  }
  console.log(dietExercise)
  console.log(allDietExercise)
  return (
    <div className="createDiet">
      <div className='diet'>
    
        {
          exerciseData.map((exe,index)=>{
            return(
              <div key={index} className='diet-box'>
                <img src={exe.img} alt="" />
                <p>{exe.name}</p>
                <p>Purpose <input  onChange={(e)=>setDietExercise({...dietExercise,purpose:e.target.value})} type="text" /></p>
                <p>Time <input   onChange={(e)=>setDietExercise({...dietExercise,time:e.target.value})}   type="num"/>Sec</p>
                <button onClick={()=>clickHandler(exe.id)}>Add Exercise</button>
              </div>
            )
          })
        }
        <div>
          <button>Add Diet</button>
        </div>
     
      </div>
    </div>
  )
}

export default CreateDietPlan
