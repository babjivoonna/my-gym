import React, { useEffect, useState } from 'react';
import './UserExercisePractice.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const UserExercisePractise = () => {
  const { state: diet } = useLocation();
  const navigate = useNavigate();

 
  const [userExercise, setUserExercise] = useState(diet);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(0)
  const [session, setSession] = useState(false);
  const [sessionEnd,setSessionEnd]=useState(false)
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * time) / parseInt(userExercise && userExercise[currentIndex]?.time);

  function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const hoursDisplay = hours > 0 ? hours.toString().padStart(2, '0') + ':' : '';
    const minutesDisplay = minutes.toString().padStart(2, '0') + ':';
    const secondsDisplay = remainingSeconds.toString().padStart(2, '0');

    return hoursDisplay + minutesDisplay + secondsDisplay;
  }

  const startSession = () => {
    if (userExercise) {
      
      setTime(parseInt(userExercise[currentIndex]?.time));
     
      setSession(true);
    }
  };

  useEffect(() => {
    if (session) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(prevTime => prevTime - 1);
        } else {
          if (currentIndex < userExercise.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            setTime(parseInt(userExercise[currentIndex + 1]?.time));
          } else {
            clearInterval(timer);
            setSession(false); 
            Swal.fire({
              title: "Good job!",
              text: "You have completed Your Session With Us!",
              icon: "success"
            })
            setSessionEnd(true)
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time, currentIndex, userExercise, session, navigate]);

  return (
    <div className="exercise-practise">
      {diet && !sessionEnd && (
        <div className='user-exercise'>
          <img src={diet[currentIndex]?.img} alt="" />
          <p>Purpose:{diet[currentIndex]?.purpose}</p>
          <p>{diet[currentIndex]?.time}Sec</p>
        </div>
      )}
      <button onClick={startSession}>Start Session</button>
      <div>
        <svg width={200} height={200} viewBox={`0 0 200 200`}>
          <circle className='circle-background' cx={200 / 2} cy={200 / 2} strokeWidth="15px" r={85} />
          <circle className='circle-progress' cx={200 / 2} cy={200 / 2} strokeWidth="15px" r={85}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }}
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em">{userExercise && secondsToTime(time)}</text>
        </svg>

      </div>
      
    </div>
  );
};

export default UserExercisePractise;
