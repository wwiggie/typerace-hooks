import React, /* hook */{ useState } from 'react';
import './App.css';

const App = () => {
  // apply the useState hook and set up state functionality for userText. userText is the current value. setUserText updates the userText value.
  const [userText, setUserText] = useState('');

  // helper method that passes in the value from the user's input
  const updateUserText = event => {
    setUserText(event.target.value);
    console.log('current userText', userText);
  }

  return (
    <div>
      <h2>Type Race</h2>
      <input value={userText} onChange={updateUserText} />
    </div>
  )
}

export default App;
