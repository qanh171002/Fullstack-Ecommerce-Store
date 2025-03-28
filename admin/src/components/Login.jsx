import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Admin Panel</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Email Address
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="min-w72 mb-3">
            <p className="mb-2 text-sm font-medium text-gray-700">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
              type="password"
              placeholder="Enter you password"
              required
            />
          </div>
          <button
            className="mt-2 w-full rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 active:bg-gray-700"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
