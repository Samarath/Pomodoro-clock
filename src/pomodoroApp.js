import React from 'react'
import TimerFunction from './timerFunc'
import Clock from './clock';

const PomodoroClock = () => {

    return (
        <>
          <h1>Pomodoro Clock</h1>
          <TimerFunction name='Break'/>
          <TimerFunction name='Session'/>
          <Clock />
          <button>Pause</button>
          <button>reset</button>
        </>
    )
}

export default PomodoroClock;