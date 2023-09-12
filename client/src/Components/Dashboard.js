import React, { useState } from 'react'
import '../CSS/DashboardStyle.css'

export default function Dashboard() {
    var date=new Date();
    var month=date.getMonth();
    var year=date.getFullYear();
    date=date.getDate();
    const[cases, setCases]=useState([]);

    const handleSchedule=async()=>{
        const response=await fetch(`${process.env.REACT_APP_BASE_URL}/createSchedule`,{
            method:"GET",
        });

        const data=await response.json();
        console.log(data.cases);
        setCases(data.cases);
    }
  return (
    <div className='dashboardContainer'>
        <h1 className="dashboardTitle">DASHBOARD</h1>
        <div className="caseContainer">
            <div className="case" id='total'>
                <h2 className='numberOfCases'>12345678</h2>
                <h4 className="statusOfCases">Total Cases</h4>
            </div>
            <div className="case" id='active'>
                <h2 className='numberOfCases'>12345678</h2>
                <h4 className="statusOfCases">Active Cases</h4>
            </div>
            <div className="case" id='pending'>
                <h2 className='numberOfCases'>12345678</h2>
                <h4 className="statusOfCases">Pending Cases</h4>
            </div>
            <div className="case" id='solved'>
                <h2 className='numberOfCases'>12345678</h2>
                <h4 className="statusOfCases">Solved Cases</h4>
            </div>
        </div>
        <button className='generateBtn' onClick={handleSchedule}>Generate</button>
        <div className="scheduledCasesContainer">
        <table className='scheduledCasesTable'>
                <caption className='tableHeading'>Scheduled Cases For The Week</caption>
                <tr>
                    <th className='colHeading'>Date of Hearing</th>
                    <th className='colHeading'>Case ID</th>
                </tr>
                {cases.map((casedata)=>{
                    {date=date+1}
                    return (
                        <tr>
                            <td className='data'>{date + "/" + month + "/" + year}</td>
                            <td className='data'>{casedata._id}</td>
                        </tr>
                    );
                })}
                {/* {cases.map((case, key) => (
                    return (
                        <tr key={key}>
                            <td className='data'>{val.dateOfHearing}</td>
                            <td className='data'>{case._id}</td>
                        </tr>
                    );
                ))} */}
            </table>
        </div>
    </div>
  )
}
