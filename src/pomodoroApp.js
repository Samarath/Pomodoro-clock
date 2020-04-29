import React from 'react'
import TimerFunction from './timerFunc'
import Clock from './clock';
import './pomodoroApp.css';
import { FaPlay, FaSyncAlt, FaGripLinesVertical } from 'react-icons/fa';
import { IconContext } from "react-icons";

const PomodoroClock = () => {

  const increaseTime = () => {
    console.log('increase time');
  }

  const decreaseTime = () => {
    console.log('decrease time');
  }

  const playPauseTime = () => {
    console.log('play pause');
  }

  const reset = () => {
    console.log('reset');
  }

    return (
        <div id='main'>

          <h1>Pomodoro Clock</h1>
          <div id='timer'>

            <TimerFunction name='Break' func1={increaseTime} func2={decreaseTime}/>
            <TimerFunction name='Session' func1={increaseTime} func2={decreaseTime}/>

          </div>

          <Clock />
          <div className='mainbtns'>
          <IconContext.Provider value={{className: 'icons'}}>

            <button onClick={playPauseTime}>
               <FaPlay /> 
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