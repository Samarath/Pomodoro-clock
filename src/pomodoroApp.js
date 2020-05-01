import React, {useState} from 'react'
import TimerFunction from './timerFunc'
import Clock from './clock';
import {useInterval} from './intervalFunc';
import './pomodoroApp.css';
import { FaPlay, FaSyncAlt, FaGripLinesVertical } from 'react-icons/fa';
import { IconContext } from "react-icons";

const PomodoroClock = () => {

  const [uptime, setTime] = useState(5); //for changing break time
  const [sessionTime, setSessionTime] = useState(25); //for changing session time
  const [sessionSeconds, setSessionSeconds] = useState(59);// for changing session seconds
  const [pausePlay, setPausePlay] = useState(false); //for start or stop timer
  const [once, setonce] = useState(true); //for decrease the timer number to 1
  const [showTimer, setShowTimer] = useState(sessionTime); //for not changing the session timer with the timer
  const [showBreakTime, setShowBreakTime] = useState(uptime); //for not changing the break timer with the timer
  const [startStopBreakTime, setStartStopBreakTime] = useState(true);
  const [timerName, setTimerName] = useState('Session')

// ------------------------bugd fryail----------
//when sessionTime get 0 and sesseionSessn second  is also zero then disable utton

    useInterval(() => {

      if(startStopBreakTime){
        
        setSessionSeconds(preSession => {   
          setTimerName('Session')
          if(preSession === 0){
            setSessionSeconds(59);
            setSessionTime(preTime => preTime === 0? preTime: preTime - 1);
          }
  
          if(sessionTime <= 0 && sessionSeconds === 1){
            //  setPausePlay(false);
             setStartStopBreakTime(false);
          }
  
          if(once){
            setSessionTime(s => s -1)
          }
          
          setonce(false);
          return preSession - 1;
        });
      }else{
        setTimerName('Break')
        setSessionSeconds(preSession => {   
          if(preSession === 0){
            setSessionSeconds(59);
            setTime(preTime => preTime === 0? preTime: preTime - 1);
          }
  
          if(uptime <= 0 && sessionSeconds === 1){
             setStartStopBreakTime(true);
          }
  
          if(once){
            setTime(s => s -1)
          }
          
          setonce(false);
          return preSession - 1;
        });
      }
  }, pausePlay? 1000: null);
  

  const increaseTime = () => {
    setTime((pretime) =>{
         if(!pausePlay){
            if(pretime < 60){
            setShowBreakTime(pretime + 1);
            return pretime + 1
         }
         setShowBreakTime(pretime);
          return pretime;
      }
      return pretime;
      });
  }

  const decreaseTime = () => {
    setTime((pretime) => {
      if(!pausePlay){
          if(pretime > 1){
            setShowBreakTime(pretime - 1);
            return pretime - 1;
          }
          setShowBreakTime(pretime);
          return pretime;
      }
      return pretime;
      
    });
  }

  const increaseSessionTimer = () => {
    
    setSessionTime((pretime) =>{
      setonce(true);
      if(!pausePlay){
        if(pretime < 60){
          setSessionSeconds(59);
          setShowTimer(pretime + 1);
          return pretime + 1
        }
        setSessionSeconds(59);
        setShowTimer(pretime);
        return pretime;
      }  
      return pretime;

      });
  }

  const decreaseSessionTimer =() => {
    
    setSessionTime((pretime) =>{
      setonce(true);
      if(!pausePlay){
        if(pretime > 1){
          setSessionSeconds(59);
          setShowTimer(pretime - 1);
          return pretime - 1
        }
        setSessionSeconds(59);
        setShowTimer(pretime);
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
            timer={showBreakTime}
            pausePlay={pausePlay}
            />
            <TimerFunction
             name='Session'
             func1={increaseSessionTimer}
             func2={decreaseSessionTimer}
             timer={showTimer}
             pausePlay={pausePlay}
             />

          </div>

          <Clock
           time={sessionTime}
           seconds={sessionSeconds}
           names={timerName}
           />
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