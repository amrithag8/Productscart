const express=require("express");
const cors=require("cors");
const productList=require("./products.json");
const app=express();


app.use(cors());
app.use(express.json());


app.get("/products", (req, res)=>{
    res.json(productList);
})

app.get("/products/:id",(req, res)=>{
    const{id}=req.params;
    const filterList=productList.filter((item)=>{
        return item.id==id;
        
    })
console.log("prod",filterList );
    
    res.json(filterList);
})

app.all("*", (req, res)=>{
    res.status(404).json( "404 Page not found");
})

const PORT=3005;
app.listen(PORT, console.log(`server started in ${PORT}`));