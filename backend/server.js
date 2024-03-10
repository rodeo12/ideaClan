const express= require("express");
const app= express() ;
app.use(express.json()) ;
require("dotenv").config() ;






//Error Handler

app.use((err,req,res)=>{
    console.err(err.stack);
    res.status(500).send({message: "Internal Server Error"});
})

//Server Connection

const PORT= process.env.PORT||7979 ;    
app.listen(PORT, ()=> {console.log(`server is running on port ${PORT}`)})