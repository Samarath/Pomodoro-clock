import React from 'react';
import {FaArrowAltCircleUp, FaArrowAltCircleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";

const TimerFunction = (props) => {

    return (
        <>
         <div>
           <h2>{props.name} length</h2>
           <div className='btns'>
             <span>

              <IconContext.Provider value={{className: 'icons'}}>
                  
                 <button onClick={props.func1}>
                   <FaArrowAltCircleUp />
                 </button>
              </IconContext.Provider>
              
             </span>  

             <p>{props.timer}</p>

             <span>
               <IconContext.Provider value={{className: 'icons'}}>

                <button onClick={props.func2}>
                  <FaArrowAltCircleDown/>
                </button>
               </IconContext.Provider>
               
             </span>  

           </div>
          </div> 
        </>
    )
}

export default TimerFunction;