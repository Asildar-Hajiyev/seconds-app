import axios from 'axios';
import React, { useState } from 'react';

const Form = () => { 
  const {REACT_APP_BASE_URL}=process.env;
  
    const [data,setData] = useState({
        name:"",
        surname:"",
        email:"",
        password:""
    });
    
    const onHandleChange =(e)=>{
        setData({ ...data,[e.target.name]: e.target.value});
    };
    
    const register = () => {
        axios.post(`${REACT_APP_BASE_URL}/create-data`,data).then(res=>{
        console.log(res)
      })
    };
  return (
    <div>
<input type="text" placeholder="name" name='name' onChange={onHandleChange}/>
<input type="text" placeholder="surname" name='surname' onChange={onHandleChange}/>
<input type="text" placeholder="email" name='email'onChange={onHandleChange}/>
<input type="password" placeholder="password"  name='password'onChange={onHandleChange}/>
<button onClick={register}>Register</button>
    </div>
  )
}

export default Form