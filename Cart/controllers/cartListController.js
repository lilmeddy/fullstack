const cartListModel = require("../models/cartListModel")

const getcartList = async(req,res)=>{
    try {
        const Arr = await cartListModel.find({})
        const total = Arr.reduce((acumulator,item)=>{return acumulator + (item.quantity * item.price)},0)
        res.render("index", { Arr, total })
    }
     catch (error) {
        console.log(error);
    }
} 
const createcartList = async(req,res)=>{
    const {name, quantity, price, email} = req.body;
    cartListModel.create({name,quantity,price,email}).then((result)=>{
     console.log(result);
     res.redirect("/list/index")
    }).catch((error)=>{
     console.log(error);
    })
}

let id 

const editCartList = async(req,res)=>{
    try{
        id = req.params.id;
        console.log(id);
        const  Arr = await cartListModel.findOne({_id:id}) 
        console.log(Arr);
        const {name,quantity,price,email,_id} =Arr
        res.render("edit", {name,quantity,price,email,_id})
    }catch (error){
        console.log(error);
    }

}
const updateCartList = async(req,res)=>{
    try {
        let {_id,name,quantity,price} = req.body
        const edit = await cartListModel.updateOne({_id},{$set:{name:name,quantity:quantity,price:price}})
        console.log(edit);
        res.redirect("/list/index")
    } catch (error) {
        console.log(error);
    }
}
const deleteCartList = async(req,res)=>{
    try {
        let _id = req.params.id
        const deleted = await cartListModel.deleteOne({_id})
        console.log(deleted);
        res.redirect("/list/index")
    } catch (error) {
        console.log(error);
    }
}



module.exports = {getcartList,createcartList,editCartList,updateCartList,deleteCartList}