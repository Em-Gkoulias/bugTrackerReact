import React from "react";
import axios from "axios";

const User = ({user}) => {
  const handleClick = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001/";

    axios.post("/logout").then((response) => {
      window.location.reload();
      console.log(response);
    });
    
  };

  return (
    <div className="User">
      <h4 style={{ marginTop: '0' }}>Welcome {user.name}</h4>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
