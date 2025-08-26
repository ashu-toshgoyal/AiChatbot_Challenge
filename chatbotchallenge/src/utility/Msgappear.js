// utility/hello.js

export function Hye(message) {
  console.log("User input:", message);

  const replyBox = document.getElementById("chatreply");
  if (replyBox) {
    // --- User Message ---
    const userReply = document.createElement("div");
    userReply.textContent = message;

    // Styling for user bubble
    userReply.style.margin = "8px";
    userReply.style.padding = "10px 14px";
    userReply.style.background = "#1E293B";
    userReply.style.color = "white";
    userReply.style.borderRadius = "12px";
    userReply.style.maxWidth = "70%";
    userReply.style.wordBreak = "break-word";
    userReply.style.alignSelf = "flex-end"; // push to right

    replyBox.appendChild(userReply);

    // --- AI Reply ---
    const aiReply = document.createElement("div");
    aiReply.textContent = "AI SAYS: " + message; // echo AI response

    // Styling for AI bubble
    aiReply.style.margin = "8px";
    aiReply.style.padding = "10px 14px";
    aiReply.style.background = "#374151";
    aiReply.style.color = "white";
    aiReply.style.borderRadius = "12px";
    aiReply.style.maxWidth = "70%";
    aiReply.style.wordBreak = "break-word";
    aiReply.style.alignSelf = "flex-start"; // push to left

    replyBox.appendChild(aiReply);

    // --- Auto-scroll to bottom ---
    replyBox.scrollTop = replyBox.scrollHeight;
  }
}
