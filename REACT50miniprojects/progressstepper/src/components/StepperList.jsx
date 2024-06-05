import React from 'react'
import StepperItem from './StepperItem';

export const StepperList = ({stepNumberArray, currentStep}) => {



  return (
    <>
      {stepNumberArray.map(stepNumber =>  {
          //if index < currentStep done=true else done false, pass done to item , decide class
        const done = stepNumber < currentStep ? true: false;
        return <StepperItem done={done} key={stepNumber} description={stepNumber + 1 + ''}/>
      })}
    </>
  )
}



