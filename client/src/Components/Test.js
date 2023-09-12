import React, { useState } from 'react';

const Test = () => {
  const [schedulingFactor, setSchedulingFactor] = useState();
  const [caseId, setCaseId] = useState('');
  const [maxElement,setMaxElement]= useState('');

  const HandleInsert = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/insert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ schedulingFactor: schedulingFactor ,caseId: caseId }),
      });

      if (response.ok) {
        setSchedulingFactor('');
        setCaseId('');
        
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
    <form style={{marginTop:"70px"}} onSubmit={HandleInsert}>
      <input 
      type="number" 
      placeholder="SchedulingFactor" 
      value={schedulingFactor} 
      onChange={(e)=> setSchedulingFactor(e.target.valueAsNumber)} 
      />
      <input 
      type="text" 
      placeholder="Case ID" 
      value={caseId} 
      onChange={(e)=> setCaseId(e.target.value)} 
      />
      <button type="submit">insert</button>
    </form>
    <button onClick={HandleDelete}>delete</button>

    {maxElement && <p>{maxElement}</p>}
    </>
  );
}

export default Test