import React /* hook */, { useState } from "react";
import "./App.css";

const App = () => {
  const SNIPPETS = [
    "Bears, beets, battlestar galactica",
    "What's Forrest Gump's password? 1Forrest1",
    "Where do programmers like to hangout? The Foo Bar"
  ];
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippet] = useState("");
  // apply the useState hook and set up state functionality for userText. userText is the current value. setUserText updates the userText value.
  const [userText, setUserText] = useState("");
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  // double arrow syntax sets up chooseSnippet to return a callback function itself. Updates to display the snippet and provide buttons that allow the user to set the snippet
  const chooseSnippet = snippetIndex => () => {
    console.log("setSnippet", snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  };

  // helper method that passes in the value from the user's input
  const updateUserText = event => {
    setUserText(event.target.value);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  };

  return (
    <div>
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
      <h4>{gameState.victory ? `Done! Time: ${gameState.endTime}ms` : null}</h4>
      <input value={userText} onChange={updateUserText} />
      <hr />
      {SNIPPETS.map((SNIPPET, index) => (
        <button onClick={chooseSnippet(index)} key={index}>
          {SNIPPET.substring(0, 10)}...
        </button>
      ))}
    </div>
  );
};

export default App;
