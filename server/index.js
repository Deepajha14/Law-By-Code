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
    const { key,value } = req.body;
    maxHeap.insert( key, value);
    console.log(key);
    res.json({ message: 'Value inserted into the max heap' });
});

// API endpoint to extract the maximum value from the max heap
app.get('/delete', (req, res) => {
    const maxElement = maxHeap.remove();
    console.log(maxElement);
    res.json({ maxElement });
    
});

app.get('/getMaxHeap', (req, res) => {
    res.json({ maxHeap: maxHeap.heap });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

