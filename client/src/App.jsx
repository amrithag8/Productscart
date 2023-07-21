import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { ProductList } from './Components/ProductList';
import './App.css';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import { ProductDetails } from './Components/ProductDetails';
import { Home } from './Components/Home';
function App() {
  const[product, setProduct]=useState([]);


  const productFetch=async()=>{
const response=await axios("http://localhost:3005/products");
setProduct(response.data);
  }

  

useEffect(()=>{
  productFetch();
},[]);



  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home product={product}/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </>
  )
}

export default App
