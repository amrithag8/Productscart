import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

export const ProductDetails=()=>{


    useEffect(()=>{
        fetchProductDetails();
    },[]);

    const[productDetails, setproductDetails]=useState([]);
    const{id}=useParams();
    console.log("id", id);

    const fetchProductDetails=async()=>{
        const res=await axios(`http://localhost:3005/products/${id}`);
        console.log("prod", res.data);
        console.log("hi");
        setproductDetails(res.data);

    }


    console.log("pro", productDetails);



    return(
        <div className="detailsPage">
            <Link to="/"><button>Go Back</button></Link>
            <img src={productDetails[0]?.thumbnail}/>
            <h2>{productDetails[0]?.title}</h2>
            <h3>PRICE: ${productDetails[0]?.price}</h3>
        </div>
    )
}