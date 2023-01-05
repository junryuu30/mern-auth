import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confPassword: e.target.confPassword.value,
    };
    try {
      await axios.post("http://localhost:5000/users", user);
      navigate("/");
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
              <form className="box" onSubmit={register}>
                <p className="has-text-centered is-danger">{msg}</p>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="name"
                      // onChange={(e)=>setName(e.target.value)}
                      // value={name}
                      name="name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="usename"
                      // onChange={(e)=>setEmail(e.target.value)}
                      // value={email}
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
                      placeholder="usename"
                      // onChange={(e)=>setpassword(e.target.value)}
                      // value={password}
                      name="password"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="usename"
                      // onChange={(e)=>setConfPassword(e.target.value)}
                      // value={confPassword}
                      name="confPassword"
                    />
                  </div>
                </div>
                <button
                  className="button is-success is-fullwidth"
                  type="submit"
                >
                  Register
                </button>
                <p>
                  Have an account?{" "}
                  <span style={{ cursor: "pointer" }}>
                    <Link to="/">Login Here</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
