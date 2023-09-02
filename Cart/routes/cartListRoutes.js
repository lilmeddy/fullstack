const express = require("express");
const  {getcartList,createcartList,editCartList,updateCartList,deleteCartList}=require("../controllers/cartListController")
const cartRoutes = express.Router()

cartRoutes.get("/index",getcartList)
cartRoutes.post('/index',createcartList)
cartRoutes.get("/edit/:id",editCartList)
cartRoutes.post("/edit",updateCartList)
cartRoutes.get("/delete/:id",deleteCartList)


module.exports = cartRoutes