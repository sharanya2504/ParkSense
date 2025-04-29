import { Link } from "react-router-dom";
import carImage from "../assets/car.png"; // <-- Import your car image

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-black text-white">
      <div className="flex items-center space-x-2 text-2xl font-bold">
        <img src={carImage} alt="Car" className="w-8 h-8" /> 
        <span>ParkSense</span>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
