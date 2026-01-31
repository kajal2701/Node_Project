import React, { useEffect, useState } from "react";
import API from "../api";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

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
    // console.log(object)
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
      API.get("/users").then((res) => {
        setUsers(res.data);
      });
    });
  };

  const updateUser = (user) => {
    console.log(user, "user");
    const { id, name, email } = user;
    setName(name);
    setEmail(email);
    setId(id);
    // API.patch("/update-user", { id, name, email }).then(() => {
    //   alert("user update successfully");
    // });
    // API.get("/users").then((res) => {
    //   setUsers(res.data);
    // });
  };

  const updateUserData = () => {
    console.log("object", name, id, email);
    API.patch("/update-user", { id, name, email }).then(() => {
      alert("user update successfully");
      API.get("/users").then((res) => {
        setUsers(res.data);
        setId("");
      });
    });
  };
  return (
    <div>
      <h2>Add User</h2>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button onClick={addUser}>Add</button>
      <button onClick={updateUserData}>Update</button>

      <h2>User List</h2>
      {users.map((u) => (
        <p key={u.id}>
          {u.id} - {u.name} - {u.email}
          <button onClick={() => deleteUser(u.id)}>delete</button>
          <button onClick={() => updateUser(u)}>update</button>
        </p>
      ))}
    </div>
  );
}

export default Users;
