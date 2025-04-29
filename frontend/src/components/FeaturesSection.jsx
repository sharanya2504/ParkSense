import React from 'react';
// import clockImage from "../assets/clock.png"

function FeaturesSection() {
  return (
    <section className="px-10 mt-20 text-center bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Smart Features for Seamless Parking</h2>
      <p className="text-gray-400 mb-10">
        ParkSense makes parking hassle-free with innovative technology and user-friendly features.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-gray-800 p-8 rounded-2xl">
        {/* <img src={clockImage} alt="Car" className="w-8 h-8" /> */}
          <h3 className="text-2xl font-semibold mb-4">Real-time Slot Availability</h3>
          <p className="text-gray-400">
            View available parking slots in real-time and book instantly without any delays.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Book in Seconds</h3>
          <p className="text-gray-400">
            Simple and fast booking process that takes just seconds to complete.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Unauthorized Parking Alerts</h3>
          <p className="text-gray-400">
            Get instant notifications when unauthorized vehicles occupy your reserved spot.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
