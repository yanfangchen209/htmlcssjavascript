import React from 'react'
import classes from './StepperItem.module.css'


const StepperItem = ({description, done}) => {
  return (
    <span className={done ? classes.circle  + ' ' + classes.active: classes.circle}>{description}</span>
  )
}
export default StepperItem;
