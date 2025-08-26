import { useState } from "react";
import "./Mainwind.scss";
import * as Util from './utility/Msgappear.js';

function Mainwind() {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      Util.Hye(inputValue); // send input value to hello.js function
      setInputValue(""); // clear input after sending
    }
  };

  return (
    <div className="chatbox">
      <input
        type="text"
        className="chatboxinputclass"
        id="chatboxinput"
        placeholder="Ask Me Anythings......"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // update state
      />
      <button id="sendbutton" className="sendbuttonclass" onClick={handleSend}>
        <i className="bi bi-send-fill"></i>
      </button>
      <div id="chatreply"></div>
    </div>
  );
}

export default Mainwind;
