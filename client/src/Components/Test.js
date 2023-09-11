import React, { useState } from 'react';

const Test = () => {
  const [key, setkey] = useState();
  const [value, setValue] = useState('');
  const [maxElement,setMaxElement]= useState('');

  const HandleInsert = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/insert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: key,value: value }),
      });

      if (response.ok) {
        setkey('');
        setValue('');
        
      } else {
        console.error('Error inserting pair into max heap');
      }
    } catch (error) {
      console.error('Error inserting pair into max heap', error);
    }
  };

  const HandleDelete = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/delete`, {
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
  
  return (
    <>
    <form onSubmit={HandleInsert}>
      <input 
      type="number" 
      placeholder="priority" 
      value={key} 
      onChange={(e)=> setkey(e.target.valueAsNumber)} 
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
    {maxElement && <p>{maxElement}</p>}
    </>
  );
}

export default Test