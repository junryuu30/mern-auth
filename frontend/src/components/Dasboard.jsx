import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const Dasboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [user, setUsers] = useState();

  useEffect(() => {
    resfreshToken();
    getusers()
  }, []);

  const resfreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decode = jwt_decode(response.data.accessToken);
      console.log(decode);
      setName(decode.name);
      setExpire(decode.exp);
    } catch (error) {
      if (error.response) {
        Navigate("/");
      }
      console.log(error);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decode = jwt_decode(response.data.accessToken);
        setName(decode.name);
        setExpire(decode.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getusers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title mt-5">Welcome {name}</h1>
        <button className="button is-info" onClick={getusers}>
          Get Users
        </button>
        <div>
          <table className="table">
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
            </tr>
            {user?.map((item, index)=>(
            <tr key={index}>
              <th>{index+1}</th>
              <th>{item?.name}</th>
              <th>{item?.email}</th>
            </tr>
             ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
