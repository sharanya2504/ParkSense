import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-10 mt-10 bg-black text-white">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold">
          Welcome to ParkSense-<br />
          Your Smart Parking Assistant
        </h1>
        <p className="text-gray-400 text-lg">
          No more searching for parking. Book your spot in seconds.
        </p>
        <div className="space-x-4">
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Sign Up</Link>
          <Link to="/login" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black">Login</Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-80 h-80 bg-gray-800 rounded-2xl flex items-center justify-center">
          {/* Placeholder for image */}
          <span className="text-gray-500">[ Image Placeholder ]</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
