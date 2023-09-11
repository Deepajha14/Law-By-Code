import React from 'react'
import '../CSS/DashboardStyle.css'

export default function Dashboard() {
    const demoData = [
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
        { dateOfHearing: "10-11-2023", caseId: "234567" },
    ]
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
        <button className='generateBtn'>Generate</button>
        <div className="scheduledCasesContainer">
        <table className='scheduledCasesTable'>
                <caption className='tableHeading'>Scheduled Cases For The Week</caption>
                <tr>
                    <th className='colHeading'>Date of Hearing</th>
                    <th className='colHeading'>Case ID</th>
                </tr>
                {demoData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className='data'>{val.dateOfHearing}</td>
                            <td className='data'>{val.caseId}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    </div>
  )
}
