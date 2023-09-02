import {userModel} from  "../models/userModel.js"

const signup = async (req,res)=>{
    try {
     const {firstName, lastName, email, password}  = req.body
     const checkUser = await userModel.findOne({email: email})
     if(checkUser){
        return res.status(401).send({message:"Email used" , status:false})
     }
     const signUp= await userModel.create({firstName,lastName,email,password})
     console.log(signUp);
     res.status(210).send({message:"User Created", status:true})  
    } catch (error) {
     console.log(error);
     res.status(500).send({message:"Internal sever error", status:false})  
    }
}
export {signup}