import React, { useEffect, useState } from "react";
import axios from "axios";
import './dashboard.css'

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [setData]);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    })
    .catch(error => {
      return error;
    });
  };

  return (
    <div>
      {data.map((user) => {
        return (
          <ul className="list-group list-group-flush list-style" key={user.id}>
            <li className="list-group-item list-items">
              <h5>{user.name}</h5>
              <h5>{user.username}</h5>
              <h5>{user.email}</h5>
              <h5>{user.address.city}</h5>
              <h5>{user.phone}</h5>
              <h5>{user.website}</h5>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Dashboard;
