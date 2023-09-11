const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;
const MaxHeap = require("./MaxHeap.js");
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 