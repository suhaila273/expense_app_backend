const express =require("express")

const router=express.Router()

const expModel =require("../model/expModel")

router.post("/entry",async(req,res)=>{
    let data=req.body
    let exp=new expModel(data)
    let result =await exp.save()
    res.json(
        {status:"success"}
    )
})

router.get("/view",async(req,res)=>{
    let data=await expModel.find()
    res.json(data)
})


module.exports=router