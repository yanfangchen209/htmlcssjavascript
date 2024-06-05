import React, { useState } from 'react'
import { CardItem } from './CardItem'
import classes from './CardList.module.css'

export const CardList = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);


  const cardList = data.map((item, index)=> <CardItem key={index} panelImage={item.panelImage} panelTitle={item.panelTitle} 
  active={index === activeIndex} onClick={() => {console.log(index);setActiveIndex(index)}} />)
  return (
    <div className={classes.container}>
        {cardList}
    </div>
  )
}
