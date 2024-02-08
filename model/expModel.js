const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema(
    {
        expType:String,
        category:String,
        amount:String,
    }
)

module.exports=mongoose.model("expenses",expenseSchema)