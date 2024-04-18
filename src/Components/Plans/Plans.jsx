import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData.js'
import whiteTick from '../../assets/whiteTick.png'


const Plans = () => {
  return (
    <div className="plans-container" id='Plans'>
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>

        <div className="programs-header" style={{gap:"2rem"}}>
            <span className="stroke-text">READY START</span>
            <span>YOUR JOURNEY</span>
            <span className="stroke-text">NOW WITHUS</span>
        </div>
        <div className="plans">

        
      {
        plansData.map((plan)=>{
            return (
                <div className="plan" key={1}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>💲{plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>{
                            return(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <span>
                          See more benefits -{">"}  
                        </span>
                        <button className="btn">Join Now</button>
                        </div>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Plans
