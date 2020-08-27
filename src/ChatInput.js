import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        user_image: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
