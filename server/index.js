const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;
const MaxHeap = require("./MaxHeap.js");
const Cases = require("./models/Cases.js");
require('dotenv').config();

app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true,
}));
    
mongoose.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@lawbycode.0ozdbkl.mongodb.net/LawByCode`);

const maxHeap = new MaxHeap();

// API endpoint to insert data into the max heap
app.post('/insert', (req, res) => {
    const { schedulingFactor,caseId } = req.body;
    maxHeap.insert( schedulingFactor,caseId );
    res.json({ message: 'pair inserted into the max heap' });
});

// API endpoint to extract the maximum value from the max heap
app.get('/delete', async(req, res) => {
    const maxElement = await maxHeap.remove();
    res.json({ maxElement });
});

// API endpoint to search a case
app.post('/search', async(req, res) => {
    const caseID=req.body.caseID;
    const Case=await Cases.findOne({_id:caseID});
    res.json({ Case });
});

app.get('/createSchedule', async(req,res)=>{
    const cases= await Cases.find();
    res.json({cases});
})

app.post('/addCase', async(req, res) => {
    const caseData=req.body.caseData;
    const caseRecord = await Cases.create(caseData);
    res.json({ id: caseRecord._id });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 