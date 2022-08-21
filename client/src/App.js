import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
function App() {

  const [shoes, setShoes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stores')
    .then(r => r.json())
    .then(shoes => setShoes(shoes))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {shoes.map((s) => {
            return <img src="https://media.finishline.com/i/finishline/FNLLogo_1200x630" alt="Logo" />
          })}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
