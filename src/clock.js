import React from 'react';

const Clock = (props) => {
  let addZero, anotherOner;
  switch (props.seconds < 10) {
    case props.seconds === 9:
      addZero = '09';
      break;
   case props.seconds === 8:
     addZero = '08';
     break;
   case props.seconds === 7:
     addZero = '07';
     break;
   case props.seconds === 6:
    addZero = '06';
    break;  
   case props.seconds === 5:
    addZero = '05';
    break;
   case props.seconds === 4:
    addZero = '04';
    break;   
   case props.seconds === 3:
     addZero = '03'
     break;
  case props.seconds === 2:
    addZero = '02';
    break;
  case props.seconds === 1:
    addZero = '01';
    break;
  case props.seconds === 0:  
    addZero = '00';
    break;
  }

  switch (props.time < 10) {
    case props.time === 9:
      anotherOner = '09';
      break;
   case props.time === 8:
     anotherOner = '08';
     break;
   case props.time === 7:
     anotherOner = '07';
     break;
   case props.time === 6:
    anotherOner = '06';
    break;  
   case props.time === 5:
    anotherOner = '05';
    break;
   case props.time === 4:
    anotherOner = '04';
    break;   
   case props.time === 3:
     anotherOner = '03'
     break;
  case props.time === 2:
    anotherOner = '02';
    break;
  case props.time === 1:
    anotherOner = '01';
    break;
  case props.time === 0:  
    anotherOner = '00';
    break;
  }

    return (
        <div className='clock'>
          <p>Session</p>
          <div className='counter'>
             <span>{props.time < 10? anotherOner : props.time}</span>:<span>{props.seconds < 10? addZero: props.seconds }</span> 
          </div>
           
        </div>
    )
}

export default Clock;