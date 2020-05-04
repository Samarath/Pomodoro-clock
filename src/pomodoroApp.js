import React, {useState} from 'react'
import TimerFunction from './timerFunc'
import Clock from './clock';
import {useInterval} from './intervalFunc';
import './pomodoroApp.css';
import { FaPlay, FaSyncAlt, FaGripLinesVertical } from 'react-icons/fa';
import { IconContext } from "react-icons";

const PomodoroClock = () => {

  const [breaktime, setBreakTime] = useState(5); //for changing break time
  const [sessionTime, setSessionTime] = useState(25); //for changing session time
  const [sessionSeconds, setSessionSeconds] = useState(0);// for changing session seconds
  const [pausePlay, setPausePlay] = useState(false); //for start or stop timer
  const [showTimer, setShowTimer] = useState(sessionTime); //for not changing the session timer with the timer
  const [showBreakTime, setShowBreakTime] = useState(breaktime); //for not changing the break timer with the timer
  const [startStopBreakTime, setStartStopBreakTime] = useState(true); //for swithing the time session to break
  const [timerName, setTimerName] = useState('Session'); //for giving the name of clock session or break which is running at that time
  const [controls, setControls] = useState(true);//for swithing names of session and break

    useInterval(() => {

      if(startStopBreakTime){

        setSessionSeconds(preSession => {
          if(preSession === 0){

            setSessionTime(preTime => preTime === 0? preTime: preTime - 1);
            setSessionSeconds(59); 
          }
  
          if(sessionTime <= 0 && sessionSeconds === 1){
             setStartStopBreakTime(false);
             setControls(false);
             setTimerName('Break');
             setBreakTime(showBreakTime);

          }
          return preSession - 1;
        });

      }else{
        setSessionSeconds(preSession => {

          if(preSession === 0){

            setBreakTime(preTime => preTime === 0? preTime: preTime - 1);
            setSessionSeconds(59); 
          }
  
          if(breaktime <= 0 && sessionSeconds === 1){

             setStartStopBreakTime(true);
             setControls(true);
             setTimerName('Session');
             setSessionTime(showTimer); 
          }
          return preSession - 1;
        });
      }
  }, pausePlay? 1000: null);
  

  const increaseTime = () => {
    setBreakTime((pretime) =>{
         if(!pausePlay){

            if(pretime < 60){

            if(!controls){
               setSessionSeconds(0);
             }
            setShowBreakTime(pretime + 1);
            return pretime + 1
         }
         if(!controls){
          setSessionSeconds(0);
        }
         setShowBreakTime(pretime);
          return pretime;
      }
      return pretime;
      });
  }

  const decreaseTime = () => {
    setBreakTime((pretime) => {
      if(!pausePlay){

          if(pretime > 1){

            if(!controls){
              setSessionSeconds(0);
            }
            setShowBreakTime(pretime - 1);
            return pretime - 1;
          }
          if(!controls){
            setSessionSeconds(0);
          }
          setShowBreakTime(pretime);
          return pretime;
      }
      return pretime;
      
    });
  }

  const increaseSessionTimer = () => {
    
    setSessionTime((pretime) =>{
 
      if(!pausePlay){
        if(pretime < 60){
          if(controls){
            setSessionSeconds(0);
          }
          setShowTimer(pretime + 1);
          return pretime + 1
        }
        if(controls){
          setSessionSeconds(0);
        }
        setShowTimer(pretime);
        return pretime;
      }  
      return pretime;

      });
  }

  const decreaseSessionTimer =() => {
    
    setSessionTime((pretime) =>{

      if(!pausePlay){
        if(pretime > 1){
          if(controls){
            setSessionSeconds(0);
          }
          setShowTimer(pretime - 1);
          return pretime - 1
        }
        if(controls){
          setSessionSeconds(0);
        }
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

  const reset = () => { //for reset everything in clock and all the functions
    setShowBreakTime(5);
    setBreakTime(5);
    setSessionTime(25);
    setPausePlay(false);
    setSessionSeconds(0);
    setStartStopBreakTime(true);
    setTimerName('Session');
    setShowTimer(25);
    setControls(true);
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
           time={controls? sessionTime: breaktime}
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