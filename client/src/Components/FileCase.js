import React from "react";
import "../CSS/FileCase.css";

export default function FileCase() {
  return (
    <div className="fileCase">
      <div className="row">
        <div className="col-md-12">
          <form className="caseform" action="index.html" method="post">
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
              />

              <label for="email">Email:</label>
              <input
                className="enterinput"
                type="email"
                id="mail"
                name="user_email"
              />

              <label for="name">Mobile No.</label>
              <input
                className="enterinput"
                type="text"
                id="mobile"
                name="user_mobile"
              />

              <label>Address:</label>
              <input
                className="enterinput"
                type="text"
                id="address"
                name="user_address"
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

            <button className="casebutton" type="submit">
              File Case
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
