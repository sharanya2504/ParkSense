import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';  // Import the Car icon

function AdminNavbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-zinc-900 text-white">
      {/* Car Icon */}
      <div className="flex items-center gap-2">
        <Car className="h-6 w-6 text-blue-500" /> {/* Add the icon here */}
        <h1 className="text-xl font-semibold text-blue-500">ParkSense Admin</h1>
      </div>
      <Link to="/login" className="text-red-500">Logout</Link>
    </div>
  );
}

export default AdminNavbar;
