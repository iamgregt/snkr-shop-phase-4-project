import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
function App() {

  const [shoes, setShoes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/shoes')
    .then(r => r.json())
    .then(shoes => setShoes(shoes))
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {shoes.map((s) => {
            return <li>{s}</li>
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
