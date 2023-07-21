import "./ProductList.css";
import { Link } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

export const ProductList=({id, title, thumbnail, price})=>{
    return(
        <>
       <Link to={`/product/${id}`}><div className="product-list">
        <img src={thumbnail}/> 
            <h2>{title}</h2>
            <h3>Price: ${price}</h3>
            <button>Add To Cart</button>

        </div>
        </Link>
        
    </>
    )
}