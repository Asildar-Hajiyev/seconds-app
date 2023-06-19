import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Products = () => {
    const [data , setData] = useState([]);

    // useEffect kompenent render olunmamisdan qabag render
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
        })
    },[])
    console.log(data)
  return (
    <div className="products">
      <table id="customers">
        <thead>
          <tr>
            <th>İD</th>
            <th>İmage</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
              data.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td><img src={item.image} alt="" /></td>
                <td>{item.title?.slice(0,10)}</td>
                <td>{item.description?.slice(0,10)}</td>
            </tr>
              ))
          }
          <tr>
            <td>salam</td>
            <td>asas</td>
            <td>sagol</td>
            <td>sassa</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default Products