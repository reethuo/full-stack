import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const addUser = async () => {
    await axios.post("http://localhost:5000/api/users", { name });
    setName("");
    fetchUsers();
  };

  return (
    <div>
      <h1>Users</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
