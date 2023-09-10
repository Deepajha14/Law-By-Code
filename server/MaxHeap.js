// creating class for max heap
class MaxHeap{
    //initialising heap array
    constructor()
    {
        this.heap=[];  
    }

    //inserting a new pair into the heap
    insert(key,value)
    {
        const newNode= {key, value};  //object of pair to be inserted into the heap
        this.heap.push(newNode);
        this.heapifyUp(this.heap.length - 1); //heap rearranging itself
    }

    //How heap rearranges itself after insertion
    heapifyUp(index)
    {
        while(index>0)
        {
            const parentIndex= Math.floor((index-1)/2);
            if(this.heap[index].key > this.heap[parentIndex].key )
            {
                this.swap(index,parentIndex);
                index=parentIndex;
            }
            else
            {
                break;
            }
        }
    }

    // Deleting the root element
    remove()
    {
        if(this.heap.length === 0)
        { return null; }

        if(this.heap.length === 1)
        { return this.heap.pop(); }

        const root = this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    //How heap rearranges itself after deletion
    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;
    
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].key > this.heap[largestIndex].key) {
            largestIndex = leftChildIndex;
        }
    
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].key > this.heap[largestIndex].key) {
            largestIndex = rightChildIndex;
        }
    
        if (largestIndex !== index) {
            this.swap(index, largestIndex);
            // Continue to heapify down the subtree rooted at largestIndex
            this.heapifyDown(largestIndex);
        }
    }

    // Swapping two index keys
    swap(index1, index2)
    {
        const temp=this.heap[index1];
        this.heap[index1]=this.heap[index2];
        this.heap[index2]=temp;
    }
}

export default MaxHeap