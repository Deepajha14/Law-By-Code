import React, { useState } from 'react';

const Test = () => {
    const [key, setkey] = useState('');
  const [value, setValue] = useState('');
  const [maxElement,setMaxElement]= useState('');

  const HandleInsert = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:3001/insert", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: key,value: value }),
      });

      if (response.ok) {
        setValue('');
        setkey('');
        
      } else {
        console.error('Error inserting pair into max heap');
      }
    } catch (error) {
      console.error('Error inserting pair into max heap', error);
    }
  };

  const HandleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3001/delete" , {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        setMaxElement(data.maxElement);
      } else {
        console.error('Error extracting max element from max heap');
      }
    } catch (error) {
      console.error('Error extracting max element from max heap', error);
    }
  };
  
//   fetch('http://localhost:3001/getMaxHeap')
//     .then(response => response.json())
//     .then(data => {
//         console.log('MaxHeap array:', data.maxHeap);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
  return (
    <>
    <form onSubmit={HandleInsert}>
      <input 
      type="number" 
      placeholder="priority" 
      value={key} 
      onChange={(e)=> setkey(e.target.value)} 
      />
      <input 
      type="text" 
      placeholder="caseID" 
      value={value} 
      onChange={(e)=> setValue(e.target.value)} 
      />
      <button type="submit">insert</button>
    </form>
    <button onClick={HandleDelete}>delete</button>
    {maxElement && <p>{maxElement.key}&nbsp;{maxElement.value}</p>}
    </>
  );
}

export default Test