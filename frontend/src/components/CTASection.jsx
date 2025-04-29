import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="text-center mt-20 mb-10 bg-black text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Parking Experience?</h2>
      <p className="text-gray-400 mb-8">
        Join thousands of users who have simplified their parking routine with ParkSense.
      </p>
      <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded text-lg">
        Get Started
      </Link>
    </section>
  );
}

export default CTASection;
