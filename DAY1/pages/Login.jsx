import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Login.css"; 

function Login() {
  const email = useRef();
  const password = useRef();
  const [loginMsg, setLoginMsg] = useState("Welcome back");

  function handleSubmit() {
    // Implement email and password validation here
    console.log("clicked");
    if (email.current.value === "" || password.current.value === "") {
      setLoginMsg("Please enter email and password");
      document.getElementById("login_msg").style.color = "red";
    } else {
      setLoginMsg("Welcome✌️");
      document.getElementById("login_msg").style.color = "green";
    }
  }

  return (
    <div id="login_container">
      <div id="login_box">
        <h1 id="login_title">Login</h1>
        <p id="login_msg">{loginMsg}</p>
        <form id="login_form">
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            id="password"
          />
          <button id="login_btn" type="button" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p id="register_link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
