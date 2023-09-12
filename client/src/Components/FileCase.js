import React, { useState } from "react";
import "../CSS/FileCase.css";

export default function FileCase() {
  const[caseData, setCaseData]=useState({
    name:"",
    email:"",
    mobileNumber: "",
    address:"",
    age:"",
    // gender:"",
  });

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response= await fetch(`${process.env.REACT_APP_BASE_URL}/addCase`,{
      method:"POST",
      credentials:"include",
      body: JSON.stringify({
        caseData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data= await response.json();

    if(response.ok){
      alert("Case has been successfully registered. Your tracking ID is " + data.id + ", please save it somewhere for further tracking of case.");
    }
  }
  return (
    <div className="fileCase">
      <div className="row">
        <div className="col-md-12">
          <form className="caseform" onSubmit={handleSubmit}>
            <h1 className="formheading"> File A Case </h1>

            <fieldset>
              <legend>
                <span className="number">1</span> Your Basic Info
              </legend>

              <label for="name">Name:</label>
              <input
                className="enterinput"
                type="text"
                id="name"
                name="user_name"
                value={caseData.name}
                onChange={(e)=>setCaseData({...caseData, name:e.target.value})}
              />
              
              <label for="age">Age:</label>
              <input
                className="enterinput"
                type="number"
                id="age"
                name="user_age"
                value={caseData.age}
                onChange={(e)=>setCaseData({...caseData, age: e.target.valueAsNumber})} 
              />
              
              {/* <label for="gender">Gender:</label>
              <input
                className="enterinput"
                type=""
                id="gender"
                name="user_name"
                value={caseData.gender}
                onChange={(e)=>setCaseData({...caseData, gender: e.target.value})} 
              /> */}

              <label for="email">Email:</label>
              <input
                className="enterinput"
                type="email"
                id="mail"
                name="user_email"
                value={caseData.email}
                onChange={(e)=>setCaseData({...caseData, email: e.target.value})}
              />

              <label for="name">Mobile No.</label>
              <input
                className="enterinput"
                type="number"
                id="mobile"
                name="user_mobile"
                value={caseData.mobileNumber}
                onChange={(e)=>setCaseData({...caseData, mobileNumber: e.target.valueAsNumber})}
              />

              <label>Address:</label>
              <input
                className="enterinput"
                type="text"
                id="address"
                name="user_address"
                value={caseData.address}
                onChange={(e)=>setCaseData({...caseData, address: e.target.value})}
              />

              <fieldset />

              <legend>
                <span className="number">2</span> Case Details
              </legend>

              <label>Number of witnesses involved ?</label>
              <input
                className="enterinput"
                type="text"
                id="witness"
                name="witness"
              />

              <label>Volume of Evidence ?</label>
              <input
                className="enterinput"
                type="text"
                id="evidence"
                name="evidence"
              />

              <label for="jail">Accused Already In Jail ?</label>
              <select id="jail" name="accused">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label for="complexity">Technical Complexity Involved ?</label>
              <select id="complexity" name="complexity">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </fieldset>

            <button className="casebutton">
              File Case
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
