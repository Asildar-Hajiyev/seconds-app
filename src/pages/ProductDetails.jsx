import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id} = useParams();
    const[card1,setCard1]=useState({});
    useEffect(()=>{
axios(`http://localhost:3009/get-data/${id}`).then((res)=>{
    setCard1(res.data.data)
})
    },[])
    console.log(id)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails