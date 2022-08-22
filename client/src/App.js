import './App.css';
import { useState, useEffect } from "react";
import StoresContainer from './StoresContainer';
import Route from "react-router-dom/Route.js"
import Login from './Login';
import NavBar from './NavBar';


function App() {

  const [shoes, setShoes] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/shoes')
    .then(r => r.json())
    .then(shoes => setShoes(shoes))
  }, [])

  return (
    <>
    <NavBar />
    <Route exact path="/">
       <StoresContainer />
    </Route>
    <Route path="/login">
    <Login onLogin={setUser}/>
    </Route>
    </>
  );
}

export default App;
