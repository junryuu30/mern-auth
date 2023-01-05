import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, sePassword] = useState('');

  const auth = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axios.post("http://localhost:5000/login", user);
      navigate("/dasboard");
    } catch (error) {
      if (error.response) {
        // console.log(error);
        setMsg(error.response.data.msg)
      }
    }
  };




  return (
    <section className="hero has-background-grey-light is-succes is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box" onSubmit={auth}>
                <p className="has-text-centerd">{msg}</p>
                <div className="field">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="usename"
                      name="email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                </div>
                <button className="button is-success is-fullwidth" type="submit">Login</button>
                <p>Not Have an account? <span style={{cursor:"pointer"}}><Link to="/register">Register Here</Link></span></p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
