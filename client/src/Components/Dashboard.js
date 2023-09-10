import React from 'react'

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
        <h1 className="dashboardTitle">DASHBOARD</h1>
        <div className="caseContainer">
            <div className="case" id='total'>
                <h2 className='numberOfCases'>12345678</h2>
                <h4 className="statusOfCases">Total Cases</h4>
            </div>
            <div className="case" id='ative'>
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
        
    </div>
  )
}
