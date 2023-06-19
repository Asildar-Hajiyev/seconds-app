import Header from "./components/Header";
import { Route, Routes,Navigate } from "react-router-dom"
import React, {useEffect, useState} from "react";
import Forms from "./pages/Forms";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import jwt_decode from "jwt-decode";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [count , setCount] = useState(0);
  const minus = ()=>{if(count !==0){ setCount(count - 1);}}

  const[user,setUser] = useState(null) 

useEffect(()=>{
  const token = sessionStorage.getItem("token")
if(token){
  let decoded = jwt_decode(token); 
  setUser("bu decodeddir",decoded.sub)
}
},[user])
      // console.log("sifreden cixarilmis token", decoded)
    
    return (
      <div className="App">
        <Header />

        <>
          <button className="button1" onClick={minus}>
            -
          </button>
          <span>{count}</span>
          <button
            className="button1"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/product" element={<Products />} />
          <Route
            path="/"
            element={
              user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />
            }
          />
          <Route
            path="/dashboard"
            element={
              user ? <Dashboard setUser={setUser} /> : <Navigate to="/" />
            }
          />
          <Route path="/product-detail:/id"  element={
              user ? <ProductDetails setUser={setUser} /> : <Navigate to="/" />
            }/>
        </Routes>
      </div>
    );

}

export default App;