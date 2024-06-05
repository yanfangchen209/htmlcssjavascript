import React, { useState } from 'react'
import {StepperList} from './StepperList'
import classes from './Stepper.module.css'


const Stepper = ({totalSteps}) => {

  const [currentStep, setCurrentStep] = useState(1);
  const stepNumberArray = [];


  //generate an array of numbers from [0,totalSteps - 1]
  for(let i = 0; i < totalSteps; i++){
    stepNumberArray.push(i);
    console.log(stepNumberArray);
  }

  const preButtonDisabled = currentStep <= 1 ? true : false;
  const nextButtonDisabled = currentStep >= totalSteps ? true : false;

  const prebuttonClickHandler = () => {
    setCurrentStep(currentStep - 1);
  }

  const nextbuttonClickHandler = () => {
    setCurrentStep(currentStep + 1);
  }

  const progressLinePercent = (currentStep - 1)/(totalSteps - 1) * 100 + '%';
  

  return (
      <div className={classes['stepper-container']}>
        <div className={classes['circle-Line-container']}>
          <div className={classes['progress-line']} style={{width: progressLinePercent}}></div>
          <StepperList stepNumberArray={stepNumberArray} currentStep={currentStep}/>
        </div>
        <button className={classes.btn} id="prevbtn"  disabled={preButtonDisabled} onClick={prebuttonClickHandler}>Prev</button>
        <button className={classes.btn} id="nextbtn" disabled={nextButtonDisabled} onClick={nextbuttonClickHandler}>Next</button>
      </div>

  )
}

export default Stepper





