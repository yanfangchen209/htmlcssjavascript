import React, { useState } from 'react'
import {StepperList} from './StepperList'
import classes from './Stepper.module.css'
const Stepper = ({totalSteps}) => {

  const [currentStep, setCurrentStep] = useState(0);
  const stepNumberArray = [];

  //generate an array of numbers from [0,totalSteps - 1]
  for(let i = 0; i < totalSteps; i++){
    stepNumberArray.push(i);
    console.log(stepNumberArray);
  }

 
  return (
    <div className={classes['stepper-container']}>
        <div className='progress-line'></div>
        <StepperList stepNumberArray={stepNumberArray}/>
        <button className='btn' id="prevbtn">Prev</button>
        <button className='btn' id="nextbtn">Next</button>
    </div>
  )
}

export default Stepper





