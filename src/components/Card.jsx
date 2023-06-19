import React from 'react'
import Button from './Button'

const Card = ({data}) => {
  // console.log(data);
  const clickedButton = ()=>{
    console.log("Salam sagol")
  }
  const  {image,title,description,price} = data;
  return (<div className="card_parent">
    <div className='card'>
      <img src={image} alt="sha" />
      <h2>{title.slice(0,10)}</h2>
      <p>{description.slice(0,10)}</p>
      <span>{price} Azn</span>
      <Button className="primary" text="Details" onClick={clickedButton}/>
      </div>
      </div>
  )
}

export default Card