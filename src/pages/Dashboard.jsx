import React from 'react'
import { useNavigate } from 'react-router-dom';
import Products2 from './Products2';

const Dashboard = ({ setUser }) => {
  const navigate =useNavigate()
  return (
    <div className='dashdbut'>
      {/* <button className='dashbutt' onClick={()=>{
        navigate("/") 
        setUser(false)
        sessionStorage.removeItem("token") ;
      }}>Logout</button> */}

      <Products2/>
    </div>
  )
}

export default Dashboard