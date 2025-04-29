import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from '../components/Navbar';

function SignUp() {
  const [phone, setPhone] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState('student');
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        phone,
        carNumber,
        password,
        role
      });

      setMessage(res.data.message || "Registration Successful");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-[#111] text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        {/* Form */}
        {message && (
          <p className="text-center text-blue-400 text-sm mb-4">{message}</p>
        )}

        <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 bg-black border border-gray-700 rounded"
          />
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-3 bg-black border border-gray-700 rounded"
          />
          <input
            type="text"
            placeholder="Enter your car number"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            required
            className="p-3 bg-black border border-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 bg-black border border-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="p-3 bg-black border border-gray-700 rounded"
          />
          <div className="flex items-center text-sm text-gray-400 space-x-2">
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="student" className="p-8 bg-black border border-gray-700 rounded">Student</option>
            <option value="teacher" className="p-8 bg-black border border-gray-700 rounded">Teacher</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center text-sm text-gray-400 space-x-2">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Register Now
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignUp;

