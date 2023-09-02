const express = require("express");

const ejs = require("ejs")
const mongoose = require("mongoose")
const cartRoutes = require("./routes/cartListRoutes")

const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/list",cartRoutes)

const Arr = []
// app.get("/0",(request,response)=>{
//     response.send({
//         data:Arr
//     })
// })
// app.get("/index",(req,res)=>{
//     console.log(__dirname);
//     res.sendFile(`${__dirname}/index.html`)
// })

// console.log(2 + 5);
// app.get("/index", (req, res) => {
//     const total = Arr.reduce((acumulator,item)=>{return acumulator + (item.quantity * item.price)},0)
//     res.render("index", { Arr, total })
// })
// app.post("/index", (req, res) => {
//     console.log(req.body);
//     Arr.push(req.body)
//     res.redirect("/index")
// })
// app.get("/delete/:id", (req, res) => {
//     let id = req.params.id
//     Arr.splice(id, 1)
//     res.redirect("/index")
// })

// let id;
// app.get("/edit/:id",(req,res)=>{
//     id = req.params.id
//     res.render("edit", { Arr, id })
// })
// app.post("/edit",(req,res)=>{
//     let newItem = req.body
//      Arr.splice(id,1,newItem)
//      res.redirect("/index")
// })

// const cartListSchema = new mongoose.Schema({
//     name: {type:String, required:true,trim:true },
//     quantity:{type:Number, required:true, trim:true, default:1,},
//     price :{type:Number, required:true, trim:true},
//     email :{type:String, required:true, trim:true, unique:true},
// })

// let cartListModel = mongoose.models.Arr_tbs || mongoose.model("Arr_tbs", cartListSchema)
// app.get("/index", async(req,res) => {
    //     try {
    //        const Arr = await cartListModel.find({})
    //        const total = Arr.reduce((acumulator,item)=>{return acumulator + (item.quantity * item.price)},0)
    //            res.render("index", { Arr, total })
    //     } catch (error) {
    //        console.log(error); 
    //     }
    // })

    // app.post("/index",(req,res)=>{
    //     const {name, quantity, price, email} = req.body;
    //    cartListModel.create({name,quantity,price,email}).then((result)=>{
    //     console.log(result);
    //     res.redirect("/index")
    //    }).catch((error)=>{
    //     console.log(error);
    //    })
        // const index = new cartListModel({
        //     name,
        //     quantity,
        //     price,
        //     email
        // })
        // index.save().then(()=>{
        //     res.redirect("/index")
        // }).catch((error)=>{
        //     console.log(error);
        // })
    // })


    // let id
    // app.get("/edit/:id",async(req,res)=>{
    //     try{
    //         id = req.params.id;
    //         console.log(id);
    //         const  Arr = await cartListModel.findOne({_id:id}) 
    //         console.log(Arr);
    //         const {name,quantity,price,email,_id} =Arr
    //         res.render("edit", {name,quantity,price,email,_id})
    //     }catch (error){
    //         console.log(error);
    //     }
           
    // })
    // app.post("/edit",async(req,res)=>{
    //     try {
    //         let {_id,name,quantity,price} = req.body
    //         const edit = await cartListModel.updateOne({_id},{$set:{name:name,quantity:quantity,price:price}})
    //         console.log(edit);
    //         res.redirect("/index")
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })

    // app.get("/delete/:id", async(req, res) => {
    //     try {
    //         let _id = req.params.id
    //         const deleted = await cartListModel.deleteOne({_id})
    //         console.log(deleted);
    //         res.redirect("/index")
    //     } catch (error) {
    //         console.log(error);
    //     }
           
           
    //     })
    
const uri = "mongodb+srv://osamedeaghedo1806:osamede@cluster0.07xrbsw.mongodb.net/mongoClassretryWrites=true&w=majority";
const connect = async () =>{
    try {
        mongoose.set("strictQuery", false)
        const test = await mongoose.connect(uri)
          console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }
    
}
connect()



app.listen(8000, () => {
    console.log("Server is running on port 8000");
})