import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import StoresContainer from './StoresContainer';
import Button from 'react-bootstrap/Button';
function App() {

  const [shoes, setShoes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stores')
    .then(r => r.json())
    .then(shoes => setShoes(shoes))
  }, [])

  return (
    <div className="App">
        <Button>This Here!</Button>
       <StoresContainer />
    </div>
  );
}

export default App;
