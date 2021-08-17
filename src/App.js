import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grining",
  "😂": "Tears of Joy",
  "😞": "Sad",
  "❤️": "Heart",
  "🔥": "Fire",
  "🥺": "Pleading",
  "👍": "Thumbs Up",
  "🤓": "nerd",
  "🤗": "Hugging",
  "😴": "Sleeping",
  "😌": "Relieved"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Translation will appear here");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out - Emoji Translation</h1>
      <input onChange={inputChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
