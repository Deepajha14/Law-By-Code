import express from "express";
import cors from "cors"
import MaxHeap from "./MaxHeap.js";
const app = express();
const port = 3001;

app.use(cors({
        origin:true,
        credentials:true,
    }));
    

const maxHeap = new MaxHeap();

// Body parsing middleware
app.use(express.json());

// API endpoint to insert data into the max heap
app.post('/insert', (req, res) => {
    const { schedulingFactor,caseId } = req.body;
    maxHeap.insert( schedulingFactor,caseId );
    console.log(schedulingFactor);
    res.json({ message: 'pair inserted into the max heap' });
});

// API endpoint to extract the maximum value from the max heap
app.get('/delete', (req, res) => {
    const maxElement = maxHeap.remove();
    console.log(maxElement);
    res.json({ maxElement });
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

