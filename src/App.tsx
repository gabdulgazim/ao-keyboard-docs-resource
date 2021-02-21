import React from 'react';
import Keyboard, { KeyboardProps } from './Keyboard';
import './App.css';


type Props = {
	keyboard: KeyboardProps[]	
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
			<Keyboard></Keyboard>
			<Keyboard></Keyboard>
    </div>
  );
}

export default App;
