import React from 'react'
import classes from './StepperItem.module.css'

const StepperItem = ({description}) => {
  return (
    <span className={classes.circle}>{description}</span>
  )
}
export default StepperItem;
