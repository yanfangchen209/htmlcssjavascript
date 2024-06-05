/*
import React from 'react'
import classes from './CardItem.module.css'

export const CardItem = ({panelImage, panelTitle, onClick, active}) => {

  return (
    <div className={active ? `${classes.panel} ${classes.active}`: classes.panel}  style={{
      backgroundImage: panelImage
    }}  onClick={onClick}>
      <h3>{panelTitle}</h3>
    </div>
  )
}
*/
import React from 'react'
import './CardItem.css'

export const CardItem = ({panelImage, panelTitle, onClick, active}) => {

  return (
    <div className={active ? 'panel active': 'panel'}  style={{
      backgroundImage: panelImage
    }}  onClick={onClick}>
      <h3>{panelTitle}</h3>
    </div>
  )
}





