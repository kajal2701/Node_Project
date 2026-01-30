import React, { useEffect, useState } from "react";
import API from "../api";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    API.get("/users").then((res) => {
      setUsers(res.data);
    });
    // getUsers();
  }, []);

  // const getUsers = async () => {
  //   const data = await fetch("http://localhost:5000/api/users");
  //   // console.log(data.json());
  //   const res = await data.json();
  //   console.log(res);

  //   setUsers(res);
  // };

  const addUser = () => {
    API.post("/create-user", { name, email }).then(() => {
      alert("User added");
      API.get("/users").then((res) => {
        setUsers(res.data);
      });
    });
  };

  const deleteUser = (id) => {
    console.log(id);
    API.delete(`/delete-user/${id}`).then(() => {
      alert("user delete");
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={addUser}>Add</button>

      <h2>User List</h2>
      {users.map((u) => (
        <p key={u.id}>
          {u.id} - {u.name} - {u.email}
          <button onClick={() => deleteUser(u.id)}>delete</button>
        </p>
      ))}
    </div>
  );
}

export default Users;
