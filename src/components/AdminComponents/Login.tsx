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
      <div className="w-full h-max min-h-[calc(90vh)] flex flex-col justify-center items-center bg-background text-foreground gap-8">
        <div className="w-full md:w-1/3 sm:w-3/4 flex flex-col justify-center items-center  h-max p-2 shadow-lg rounded-lg gap-8 bg-header">
          {" "}
          <div className="w-full flex flex-row justify-center items-center">
            <h1 className="font-bold font-heading text-5xl">Login</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center  h-max p-2">
            <input
              type="text"
              placeholder="Username"
              value={username}
              className="w-full h-10 pl-5 rounded-full bg-input text-foreground font-body font-extralight tracking-wide text-sm sm:text-base"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 pl-5 rounded-full bg-input text-foreground font-body font-extralight tracking-wide text-sm sm:text-base"
            />
            <br />
            <button
              onClick={handleLogin}
              className="bg-input shadow-md font-semibold font-body text-sm uppercase px-10 py-2 rounded-full"
            >
              Login
            </button>
          </div>
          <div className="w-full flex flex-col justify-center items-center  h-max p-2">
            {" "}
            <p className="font-heading uppercase text-red-500">{message}</p>
          </div>
        </div>
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
