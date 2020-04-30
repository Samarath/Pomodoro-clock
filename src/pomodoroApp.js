import React, {useState} from 'react'
import TimerFunction from './timerFunc'
import Clock from './clock';
import {useInterval} from './intervalFunc';
import './pomodoroApp.css';
import { FaPlay, FaSyncAlt, FaGripLinesVertical } from 'react-icons/fa';
import { IconContext } from "react-icons";

const PomodoroClock = () => {

  const [uptime, setTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState(59);
  const [pausePlay, setPausePlay] = useState(false);
  const [once, setonce] = useState(true);

  useInterval(() => {
      setSessionSeconds(preSession => {
        if(preSession === 0){
          setSessionSeconds(59);
          setSessionTime(preTime => preTime - 1)
        }

        if(sessionTime <= 0 && sessionSeconds === 1){
           setPausePlay(false);
        }

        if(once){
          setSessionTime(s => s -1)
        }
        
        console.log(sessionSeconds);
        setonce(false);
        return preSession - 1;
      });
  }, pausePlay? 1000: null)  

  const increaseTime = () => {
    setTime((pretime) =>{
         if(!pausePlay){
            if(pretime < 60){
            return pretime + 1
         }
          return pretime;
      }
      return pretime;
      });
  }

  const decreaseTime = () => {
    setTime((pretime) => {
      if(!pausePlay){
          if(pretime > 1){
            return pretime - 1;
          }
          return pretime;
      }
      return pretime;
      
    });
  }

  const increaseSessionTimer = () => {
    setSessionTime((pretime) =>{
      if(!pausePlay){
        if(pretime < 60){
          return pretime + 1
        }
        return pretime;
      }    
      return pretime;

      });
  }

  const decreaseSessionTimer =() => {
    setSessionTime((pretime) =>{
      if(!pausePlay){
        if(pretime > 1){
          return pretime - 1
        }
        return pretime;
      }
      return pretime;

      });
  }

  const playPauseTime = () => {
    setPausePlay( preState => !preState)
    if(playPauseTime){
      
    }
  }

  const reset = () => {
    setTime(5);
    setSessionTime(25);
    setPausePlay(false);
    setSessionSeconds(59);
    setonce(true);
  }

    return (
        <div id='main'>

          <h1>Pomodoro Clock</h1>
          <div id='timer'>

            <TimerFunction 
            name='Break'
            func1={increaseTime}
            func2={decreaseTime}
            timer={uptime}
            />
            <TimerFunction
             name='Session'
             func1={increaseSessionTimer}
             func2={decreaseSessionTimer}
             timer={sessionTime}
             />

          </div>

          <Clock time={sessionTime} seconds={sessionSeconds}/>
          <div className='mainbtns'>
          <IconContext.Provider value={{className: 'icons'}}>

            <button onClick={playPauseTime}>
               {pausePlay? <FaGripLinesVertical />: <FaPlay />} 
            </button>

            <button onClick={reset}>           
               <FaSyncAlt />
            </button>
          </IconContext.Provider> 
          </div>
          
        </div>
    )
}

export default PomodoroClock;