import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from '../components/Navbar';

function Login() {
  const [role, setRole] = useState("student"); // Default to "student"
  const [phoneOrUsername, setPhoneOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const url = "http://localhost:5000/api/auth/login"; // Simplified for both roles
      const payload = { 
        phone: role === "admin" ? undefined : phoneOrUsername,  // Use phone for user roles
        username: role === "admin" ? phoneOrUsername : undefined,  // Use username for admin
        password, 
        role 
      };

      const res = await axios.post(url, payload);

      setMessage(res.data.message || "Login Successful");
      setTimeout(() => navigate("/admin-dashboard"), 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-[#111] text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Title and Role Switch */}
        {role !== "admin" && (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setRole("student")}
              className={`px-4 py-2 rounded-l-full ${role === "student" ? "bg-blue-600" : "bg-gray-700"}`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("teacher")}
              className={`px-4 py-2 rounded-r-full ${role === "teacher" ? "bg-blue-600" : "bg-gray-700"}`}
            >
              Teacher
            </button>
          </div>
        )}

        <h2 className="text-2xl font-bold text-center mb-6">Login as {role === "admin" ? "Admin" : role === "teacher" ? "Teacher" : "Student"}</h2>

        {message && <p className="text-center text-blue-400 text-sm mb-4">{message}</p>}

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          {role === "admin" ? (
            <input
              type="text"
              placeholder="Enter admin username"
              value={phoneOrUsername}
              onChange={(e) => setPhoneOrUsername(e.target.value)}
              required
              className="p-3 bg-black border border-gray-700 rounded"
            />
          ) : (
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneOrUsername}
              onChange={(e) => setPhoneOrUsername(e.target.value)}
              required
              className="p-3 bg-black border border-gray-700 rounded"
            />
          )}

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 bg-black border border-gray-700 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        {role !== "admin" && (
          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-blue-400 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
        )}

        {/* Bottom Text for Switching Roles */}
        {role === "admin" ? (
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Login as a{" "}
              <button
                onClick={() => setRole("student")}
                className="text-blue-500 hover:underline"
              >
                User
              </button>
            </p>
          </div>
        ) : (
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">Sign Up</Link>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Or log in as an{" "}
              <button
                onClick={() => setRole("admin")}
                className="text-blue-500 hover:underline"
              >
                Admin
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Login;
