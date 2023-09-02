const express = require("express");
const app = express()
const ejs = require("ejs")
app.set("view engine","ejs")
let firstArr=[
    {name:"mede",age:"20"},
    {name:"mede",age:"20"},
    {name:"mede",age:"20"},
    {name:"mede",age:"20"},
    {name:"mede",age:"20"},
    {name:"mede",age:"20"},
    {name:"mede",age:"20"},
    {name:"mede",age:"20"}
]
app.get("/users",(request,response)=>{
    response.send({
        data:firstArr
    })
})
// console.log(2 + 5);
// console.log("hello world");
// console.log([
//     {name: "Mede"}
// ]);
app.get("/index",(req, res)=>{
  console.log(__dirname);
    res.render("index", {name:"Mede" ,firstArr})
})
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})