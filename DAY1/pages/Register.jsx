import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/css/Register.css";

function Register() {
  const navigate = useNavigate(); // Initialize useNavigate
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [registerMsg, setRegisterMsg] = useState("");
  const [registerMsgColor, setRegisterMsgColor] = useState("black");

  function handleSubmit() {
    // Thorough validation for data integrity and security
    if (
      !username.current.value ||
      !email.current.value ||
      !password.current.value ||
      password.current.value !== confirmPassword.current.value
    ) {
      setRegisterMsg("Please fill in all fields and ensure passwords match.");
      setRegisterMsgColor("red");
      return;
    }

    // Handle registration logic (e.g., send data to server)
    console.log("Registering user:", {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    });

    setRegisterMsg("Registration successful!");
    setRegisterMsgColor("green");

    // Redirect to login page after registration
    setTimeout(() => {
      navigate("/"); // Redirect to login page
    }, 1000); // Change delay as needed
  }

  return (
    <div id="register_container">
      <div id="register_box">
        <h1 id="register_title">Register</h1>
        <p id="register_msg" style={{ color: registerMsgColor }}>
          {registerMsg}
        </p>
        <form id="register_form">
          <input
            type="text"
            ref={username}
            placeholder="Enter your username"
            id="username"
          />
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter your new password"
            id="password"
          />
          <input
            type="password"
            ref={confirmPassword}
            placeholder="Confirm your password"
            id="confirm_password"
          />
          <button id="register_btn" type="button" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
