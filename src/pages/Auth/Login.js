import { useState } from "react";
import logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";
import classes from "./Login.module.css";
import {Button, Container } from "reactstrap";

async function loginUser(credentials) {
  // return fetch("http://localhost:8080/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(credentials),
  // }).then((data) => data.json());
  return ({
    "token": "test123"
    })
}

const Login = ({ setToken }) => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken("232");
  };

  return (
    <Container className={classes.maindiv}>
      <Container>
        <img style={{ marginLeft: "80px" }} src={logo} alt="Media Enhancer" />
      </Container>
      <div className={classes["login-wrapper"]}>
        <Container>
          <h1 className={classes.heading}>Login</h1>
        </Container>

        <Container className={classes["child-div"]}>
          <form onSubmit={handleSubmit}>
            <input
              className={classes["input-style"]}
              type="text"
              placeholder="Email / Phone"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />

            <br />

            <input
              className={classes["input-style"]}
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <br />
            
            <div>
              <Button style={{ width: "400px" }} type="submit">
                Login
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </Container>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
