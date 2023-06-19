import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const navigate = useNavigate();

    const [loginData,setLoginData] = useState({
    username:"",
    password:"",
    age:""
    })
    const login =()=>{
  
        axios.post(`http://localhost:3009/login`,loginData).then((res)=>{
            if(res.status == 201){
                navigate("/dashboard") 
                setUser(true);
                sessionStorage.setItem("token", res.data.data.token)
            }
        });
    }
    const onHandleChange = (e)=>{
        setLoginData({...loginData , [e.target.name] : e.target.value});
    }
  return (
    <div className='user_Login'>
      <input type="text" placeholder='userName(Asildar123)' name='username' onChange={onHandleChange}/>
      <input type="password" placeholder='password(asi123)' name='password' onChange={onHandleChange}/>
      <input type="number" placeholder='Age(23)' name='age' onChange={onHandleChange}/>
      <button className='button_log' onClick={login}>Login</button>
    </div>
  );
}

export default Login