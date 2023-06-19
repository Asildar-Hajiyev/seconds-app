import React from 'react'
import Card from '../components/Card';
import { product } from "../components/data/products";

    
const Home = () => {
  return (
    <div>
       <main>
          {product.map((item) => {
            // console.log(item.price)
            return <Card key={item.id} data={item} />;
          })}
        </main>
    </div>
  )
}

export default Home