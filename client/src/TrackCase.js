import React from "react";
import "./CSS/TrackCaseStyle.css";
import { RiSearchLine } from "react-icons/ri";

function TrackCase() {
  return (
    <div className="mainBox">
      <div className="trackCase">
        <h1 className="heading">Track a Case</h1>
        <div className="searchBar">
          <RiSearchLine className="searchIcon" />
          <form action="">
            <input
              type="text"
              name="trackingId"
              placeholder="Enter Case ID to search"
            />
            <button className="trackButton" type="submit">
              Track
            </button>
          </form>
        </div>
        <div className="caseDetails">
          <h3>Case Details</h3>
          <div className="caseData">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            in, dolorem omnis ipsa eveniet iure magni dicta voluptates.
            Reprehenderit doloribus velit excepturi minus enim voluptates
            asperiores eveniet rerum vel fuga?
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackCase;
