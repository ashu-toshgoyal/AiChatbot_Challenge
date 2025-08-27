import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Detailsentry.scss";

function Detailsentry() {
  const navigate = useNavigate(); 

  // ✅ State for name and college
  const [nameInput, setNameInput] = useState("");
  const [collegeInput, setCollegeInput] = useState("");

  const handleNext = () => {
    if (nameInput.trim() === "") {
      alert("Please enter both your Name and College Name before continuing.");
      return;
    }
    // ✅ Navigate if both fields are filled
    navigate("/chatbot");
  };

  return (
    <div className="container">
      <div className="form-frame">
        <div className="form-group">
          <label className="form-label" htmlFor="name-input">Name</label>
          <input
            type="text"
            className="form-input"
            id="name-input"
            placeholder="Enter Your Name..."
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="college-input">College Name</label>
          <input
            type="text"
            className="form-input"
            id="college-input"
            placeholder="Enter Your College Name..."
            value={collegeInput}
            onChange={(e) => setCollegeInput(e.target.value)}
          />
        </div>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Detailsentry;
