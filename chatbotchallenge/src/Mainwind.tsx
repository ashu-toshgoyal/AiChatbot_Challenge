import "./Mainwind.scss";
// import * as Util from './utility/hello.js'

function Mainwind() {
  // const handleSend = () => {
  //   const val = document.getElementById("chatboxinput").value;
  //   Hye(val); // call function from hello.js
  // };

  return (
    <div className="chatbox">
      <input
        type="text"
        className="chatboxinputclass"
        id="chatboxinput"
        placeholder="Ask Me Anythings......"
      />
      <button id="sendbutton" className="sendbuttonclass">
        <i className="bi bi-send-fill"></i>
      </button>
      <div id="chatreply"></div>
    </div>
  );
}

export default Mainwind;
