import { ProductList } from "./ProductList"

export const Home=({product})=>{
    return(
<>
<div className='products'>
      {
        product.map((item)=>{
          return <ProductList {...item}/>
        })
      }
      
      </div>
        </>
    

    )
        
}