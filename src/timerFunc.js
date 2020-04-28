import React from 'react';

const TimerFunction = (props) => {
    return (
        <>
         <div id='main'>
           <h2>{props.name} length</h2>
           <div>
             <button><i className="fas fa-arrow-up"></i></button>
             <p>1</p>
             <button>decrease</button>
           </div>
          </div> 
        </>
    )
}

export default TimerFunction;