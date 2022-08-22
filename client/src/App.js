import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import StoresContainer from './StoresContainer';
import { Button } from 'react-bootstrap';
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
        <Button>This Here!</Button>
       <StoresContainer />
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
