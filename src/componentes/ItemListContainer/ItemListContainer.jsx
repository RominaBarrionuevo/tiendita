import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div>   
     <h2 className='propsColor'>{props.greeting}</h2>
    </div>
  )
} 

/*  <h2 style={{color:"orange"}}>{props.greeting}</h2> */

/* 
opcion dos de desestructuracion

const ItemListContainer = ({greeting}) => {
  return (
    <div>   
     <h2 className='propsColor'>{greeting}</h2>
    </div>
  )
} */ 

export default ItemListContainer