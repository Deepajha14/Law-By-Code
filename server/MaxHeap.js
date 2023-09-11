const Schedule=require("./models/Schedules")

// creating class for max heap
class MaxHeap{
    //initialising heap array
    constructor(){
        this.heap=[];  
    }

    //inserting a new pair into the heap
    insert=async(schedulingFactor,caseID)=>{
        const newNode= {schedulingFactor, caseID};  //object of pair to be inserted into the heap
        
        const queueRecord =await Schedule.findOne();
        if(queueRecord)
            this.heap =queueRecord.priorityQueue;
        
        this.heap.push(newNode);
        this.heapifyUp(this.heap.length - 1); //heap rearranging itself
        
        if(queueRecord){
            await Schedule.updateOne({_id:queueRecord._id},{$set:{priorityQueue:this.heap}});
        }
        else{
            await Schedule.create({priorityQueue: this.heap});
        }
    }

    //How heap rearranges itself after insertion
    heapifyUp(index){
        while(index>0){
            const parentIndex= Math.floor((index-1)/2);
            if(this.heap[index].schedulingFactor > this.heap[parentIndex].schedulingFactor ){
                this.swap(index,parentIndex);
                index=parentIndex;
            }
            else{
                break;
            }
        }
    }

    // Deleting the root element
    remove=async()=>{
        const queueRecord =await Schedule.findOne();
        
        if(queueRecord)
            this.heap = queueRecord.priorityQueue;
            
        if(this.heap.length === 0)
            return null; 

        if(this.heap.length === 1){
            const root=this.heap.pop();
            await Schedule.updateOne({_id:queueRecord._id},{$set:{priorityQueue:this.heap}});
            return root.schedulingFactor; 
        }

        const root = this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown(0);

        await Schedule.updateOne({_id:queueRecord._id},{$set:{priorityQueue:this.heap}});
        
        return root.schedulingFactor;
    }

    //How heap rearranges itself after deletion
    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;
    
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].schedulingFactor > this.heap[largestIndex].schedulingFactor) {
            largestIndex = leftChildIndex;
        }
    
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].schedulingFactor > this.heap[largestIndex].schedulingFactor) {
            largestIndex = rightChildIndex;
        }
    
        if (largestIndex !== index) {
            this.swap(index, largestIndex);
            // Continue to heapify down the subtree rooted at largestIndex
            this.heapifyDown(largestIndex);
        }
    }

    // Swapping two index keys
    swap(index1, index2){
        const temp=this.heap[index1];
        this.heap[index1]=this.heap[index2];
        this.heap[index2]=temp;
    }
}

module.exports = MaxHeap;
