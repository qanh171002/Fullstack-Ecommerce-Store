import { useContext } from "react";
import { useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl, setUser } =
    useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign up") {
        const res = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (res.data.success) {
          setToken(res.data.token);
          setUser({ name: res.data.name, email: res.data.email });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userEmail", res.data.email);
          localStorage.setItem("userName", res.data.name);
        } else {
          toast.error(res.data.message);
        }
      } else {
        const res = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (res.data.success) {
          setToken(res.data.token);
          setUser({ name: res.data.name, email: res.data.email });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userEmail", res.data.email);
          localStorage.setItem("userName", res.data.name);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full border border-gray-600 px-3 py-2"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full border border-gray-600 px-3 py-2"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full border border-gray-600 px-3 py-2"
        placeholder="Password"
        required
      />
      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="mt-4 w-full bg-gray-900 px-8 py-2 text-gray-100 transition-colors duration-300 hover:opacity-90 active:bg-gray-700">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
