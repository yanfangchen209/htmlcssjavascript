import React from 'react'
import StepperItem from './StepperItem';

export const StepperList = ({stepNumberArray}) => {
  return (
    <div>
      {stepNumberArray.map(stepNumber => <StepperItem key={stepNumber} description={stepNumber + 1 + ''}/>)}
    </div>
  )
}



