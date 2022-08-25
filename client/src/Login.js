import React, { useEffect } from "react"
import {useState} from "react"


function Login({onLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [authMode, setAuthMode] = useState("signin")
    const [shoeSize, setShoeSize] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errors, setErrors] = useState([])

    useEffect(() => {
      console.log(errors.join(""))
    }, [errors])

    function handleFirstName(e){
      setFirstName(e.target.value)
    }

    function handleLastName(e){
      setLastName(e.target.value)
    }

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    function handleChange(e){
      setUsername(e.target.value)
    }
    
    function handlePasswordChange(e){
      setPassword(e.target.value)
    }
    function handleShoeSize(e){
      setShoeSize(e.target.value)
    }

    function handleSignIn(e){
      e.preventDefault()
      console.log(username, password)

      fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: username, password: password})
      })
      .then(r => r.json())
      .then(user => {
        console.log(user)
        onLogin(user)
      })

    }

    function handleSubmit(e) {

      const first_name = firstName
      const last_name = lastName
      const shoe_size = shoeSize

      const user = {
        first_name ,
        last_name,
        username: username,
        password: password,
        shoe_size
      }

   


        e.preventDefault();
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((r) => {
            if(r){
              console.log(r)
              r.json().then((user) => onLogin(user))
            } else {
              r.json()
              .then(e => {
                setErrors(Object.entries(e.errors).flat())
              })
            }
          })
          ;
      }

      if (authMode === "signin") {
        return (
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSignIn}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    <a href="#">Sign Up</a>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Username</label>
                  <input
                  value={username}
                    onChange={handleChange}
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter username"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="text-center mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </form>
          </div>
        )
      }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
            value={firstName}
            onChange={handleFirstName}
            required
              type="text"
              className="form-control mt-1"
              placeholder="First Name"
            />
               <label>Last Name</label>
            <input
            value={lastName}
            onChange={handleLastName}
            required
              type="text"
              className="form-control mt-1"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
            required
            onChange={handleChange}
              type="text"
              value={username}
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            required
            onChange={handlePasswordChange}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Shoe Size</label>
            <input
              value={shoeSize}
              onChange={handleShoeSize}
              type="number"
              min={4}
              max={15}
              className="form-control mt-1"
              placeholder="Enter Shoe Size"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login 