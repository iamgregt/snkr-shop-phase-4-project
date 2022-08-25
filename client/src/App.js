import './App.css';
import { useState, useEffect } from "react";
import StoresContainer from './StoresContainer';
import Route from "react-router-dom/Route.js"
import Login from './Login';
import NavBar from './NavBar';
import NewShoe from './NewShoe';



function App() {

  const [shoes, setShoes] = useState([])
  const [user, setUser] = useState(null)
  const [currentStore, setCurrentStore] = useState("")
  // useEffect(() => {
  //   fetch("http://localhost:3000/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  // useEffect(() => {
  //   fetch('http://localhost:3000/auth')
  //   .then(r => {
  //     if(r.ok){
  //       console.log("current user is good")
  //       r.json().then(user => setUser(user))
  //     }
  //     else {
  //       console.log(`${user} is no good`)
  //     }
  //   })
  // }, [])

  // if(!user) return <Login onLogin={setUser} />

  function handleStoreSelect(e){
    console.log(e)
  }

 




  return (
    <>
    <NavBar currentUser={user} setUser={setUser}/>
    <Route exact path="/">
       <StoresContainer setStore={setCurrentStore}/>
    </Route>
    <Route exact path="/login">
    <Login onLogin={setUser}/>
    </Route>
    <Route>
      <NewShoe />
    </Route>
    </>
  );
}

export default App;
