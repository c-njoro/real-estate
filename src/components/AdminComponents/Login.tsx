import axios from "axios";

import { useState } from "react";
import Dashboard from "./Dashboard";

const AdminPage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage("Enter details!!!");
      return;
    }
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_FRONTEND_URL}/api/authenticator?username=${username}&password=${password}`
      );

      if (response.data.authenticated === true) {
        setIsAuthenticated(true);
        setMessage("Authentication successful");
        return;
      }

      setMessage("Failed authentication!!!");
    } catch (error) {
      if (error) {
        setMessage("Failed authentication!!!");
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default AdminPage;
