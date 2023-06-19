import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Products2 = () => {
  const navigate =useNavigate()
  const[dataProducts,setDataProducts]=useState([]);
useEffect(()=>{
axios('http://localhost:3009/get-data').then((res)=>{
  setDataProducts(res.data.data)
})
},[])
  return (
    <div>
<table id="customers">
  <thead>
  <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Title</th>   
    <th>Description</th>
    <th>Category</th>
    <th>Price</th>
    <th>Details</th>
    <th>Delete</th>
  </tr>
  </thead>
  <tbody>
      {
        dataProducts.map((item)=>{
          if(typeof item.title !=="undefined"){
            return (
              <>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.image} alt={item.id} /></td>
                <td>{item.title.slice(0,15)}</td>
                <td>{item.description.slice(0,18)}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>{navigate(`/product-detail/${item.id}`)}}>{""}Details{""}</button></td>
                <td><button>Delete</button></td>
              </tr>
              </>
            )
          }


        })
      }
  </tbody>
</table>
      </div>
  )
}

export default Products2