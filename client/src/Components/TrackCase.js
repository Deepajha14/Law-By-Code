import React, { useState } from "react";
import "../CSS/TrackCaseStyle.css";
import { RiSearchLine } from "react-icons/ri";

function TrackCase() {
  const [caseData, setCaseData] = useState({});
  const[caseID, setCaseId]=useState();

  const obj = {
    name: "Arushi",
    age: "34",
    gender: "Female",
    address: "street no. 42",
    lawyerName: "Kapil",
    caseName: "xyz",
    mobileNumber: "9234667007",
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
  
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/search`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials:"include",
      body: JSON.stringify({
        caseID,
      }),
    })
    const data =await response.json();

    setCaseData(data.Case);
  }

  return (
    <div className="mainBox">
      <div className="trackCase">
        <h1 className="heading">Track a Case</h1>
        <div className="searchBar">
          <RiSearchLine className="searchIcon" />
          <form onSubmit={handleSubmit}>
            <input
              className="trackCaseInput"
              type="text"
              name="trackingId"
              placeholder="Enter Case ID to search"
              value={caseID}
              onChange={(e)=>{setCaseId(e.target.value)}}
            />
            <button className="trackButton">
              Track
            </button>
          </form>
        </div>
        <div className="caseDetails">
          <h2>Case Details</h2>
          <div className="caseData">
            {Object.entries(caseData).map((caseDataElement, value) => {
              return (
                <div className="caseDataElement" key={caseDataElement[0]}>
                  <span className="caseDataHeading">
                    {caseDataElement[0]} :{" "}
                  </span>
                  <span className="caseDataValue">{caseDataElement[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackCase;
