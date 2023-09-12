const { default: mongoose } = require("mongoose");

const CasesSchema= new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    gender: Boolean,
    address: String,
    lawyerName: String,
    caseName: String,
    mobileNumber: Number,
    schedulingFactor: Number,
})

const Cases = mongoose.model("Cases", CasesSchema);

module.exports=Cases;