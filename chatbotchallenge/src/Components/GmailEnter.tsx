// GmailEnter.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GmailEnter.scss";

function GmailEnter() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email.trim() === "") {
      alert("Please enter your Gmail before continuing."); // show alert if empty
      return;
    }
    // ✅ navigate if email is filled
    navigate("/Details");
  };

  return (
    <div className="sq">
      <div className="innersq">
        <h3>Enter Your Email</h3>
        <input
          type="email"
          className="inpt"
          id="inputgmail"
          placeholder="Enter your Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="contclass" id="continuebutton" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default GmailEnter;
