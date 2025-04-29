// AdminDashboard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalSlots: 0,
    bookedSlots: 0,
    unauthorizedParking: 0,
  });
  const [bookedSlots, setBookedSlots] = useState([]);
  const [unauthorizedParking, setUnauthorizedParking] = useState([]);
  const [activeTab, setActiveTab] = useState('Faculty');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await axios.get('http://localhost:5000/api/admin/stats');
        const bookedSlotsRes = await axios.get('http://localhost:5000/api/admin/booked-slots');
        const unauthorizedRes = await axios.get('http://localhost:5000/api/admin/unauthorized-parking');

        console.log('Booked Slots:', bookedSlotsRes.data); // Add this line
        console.log('Unauthorized Parking:', unauthorizedRes.data); // Add this line
        
        setStats(statsRes.data);
        setBookedSlots(bookedSlotsRes.data);
        setUnauthorizedParking(unauthorizedRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  
  }, []);

  const facultySlots = bookedSlots.filter(slot => slot.userType === 'faculty');
  const studentSlots = bookedSlots.filter(slot => slot.userType === 'student');

  return (
    <div className="bg-black text-white min-h-screen p-2">
      <AdminNavbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-xl mb-8">Manage parking slots and monitor activity</p>

        {/* Stat Boxes */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="bg-zinc-950 p-10 rounded-lg h-50 transform transition-all hover:scale-105 border-1 border-white-500 rounded-lg shadow-lg">
            <h2 className="text-3xl">Total Slots</h2>
            <p className="text-3xl font-bold">{stats.totalSlots}</p>
            <br/>
            <p className="text-gray-400">Parking slots available</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-lg h-50 transform transition-all hover:scale-105 border-1 border-white-500 rounded-lg shadow-lg">
            <h2 className="text-3xl">Booked Slots</h2>
            <p className="text-3xl font-bold text-blue-500">{stats.bookedSlots}</p>
            <br/>
            <p className="text-gray-400">Currently occupied</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-lg h-50 transform transition-all hover:scale-105 border-1 border-white-500 rounded-lg shadow-lg">
            <h2 className="text-3xl">Unauthorized Parking</h2>
            <p className="text-3xl font-bold text-red-500">{stats.unauthorizedParking}</p>
            <br/>
            <p className="text-gray-400">Requires attention</p>
          </div>
        </div>

        {/* Table with Tabs on Top */}
        <div>
      {/* Tabs Container with rounded corners */}
      <div className="flex justify-center h-15 rounded-lg bg-zinc-800 p-1">
        {/* Tab Buttons */}
        <button
          onClick={() => {
            setActiveTab('Faculty');
            console.log('Active Tab:', 'Faculty');
          }}
          className={`flex-1 py-3 text-center text-lg font-semibold rounded-lg transition-transform transform hover:scale-90 ${
            activeTab === 'Faculty'
              ? 'bg-zinc-950'
              : 'bg-zinc-800'
          }`}
        >
          Faculty
        </button>
        <button
          onClick={() => setActiveTab('Student')}
          className={`flex-1 py-3 text-center text-lg font-semibold rounded-lg transition-transform transform hover:scale-90 ${
            activeTab === 'Student'
              ? 'bg-zinc-950'
              : 'bg-zinc-800 '
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveTab('Unauthorized')}
          className={`flex-1 py-3 text-center text-lg font-semibold rounded-lg transition-transform transform hover:scale-90 ${
            activeTab === 'Unauthorized'
              ? 'bg-zinc-950'
              : 'bg-zinc-800'
          }`}
        >
          Unauthorized
        </button>
      </div>
          </div>

          <div >
            <br/>
          {/* Table Content */}

<div className="p-6">
      {/* Tab Content */}
      {activeTab === 'Faculty' && (
        <div>
          <h2 className="text-2xl mb-4 text-white">Faculty Parking Slots</h2>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-lg">
            <table className="min-w-full table-auto text-left text-white bg-zinc-800">
              <thead>
                <tr className="border-b text-xl">
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Slot ID</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Car Number</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {facultySlots.map((slot) => (
                  <tr key={slot.slotId} className="border-b hover:bg-zinc-900">
                    <td className="px-6 py-4">{slot.slotId}</td>
                    <td className="px-6 py-4">{slot.name}</td>
                    <td className="px-6 py-4">{slot.carNumber}</td>
                    <td className="px-6 py-4">{slot.phoneNumber}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-400">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'Student' && (
        <div>
          <h2 className="text-2xl mb-4 text-white">Student Parking Slots</h2>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-lg">
            <table className="min-w-full table-auto text-left text-white bg-zinc-800">
              <thead>
                <tr className="border-b text-xl">
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Slot ID</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Car Number</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentSlots.map((slot) => (
                  <tr key={slot.slotId} className="border-b hover:bg-zinc-900">
                    <td className="px-6 py-4">{slot.slotId}</td>
                    <td className="px-6 py-4">{slot.name}</td>
                    <td className="px-6 py-4">{slot.carNumber}</td>
                    <td className="px-6 py-4">{slot.phoneNumber}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-400">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'Unauthorized' && (
        <div>
          <h2 className="text-2xl mb-4 text-white">Unauthorized Parking</h2>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-lg">
            {unauthorizedParking.length > 0 ? (
              <table className="min-w-full table-auto text-left text-white bg-zinc-800">
                <thead>
                  <tr className="border-b text-xl">
                    <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Slot ID</th>
                    <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Car Number</th>
                    <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Reported At</th>
                    <th className="px-6 py-3 text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {unauthorizedParking.map((entry) => (
                    <tr key={entry.slotId} className="border-b hover:bg-zinc-900">
                      <td className="px-6 py-4">{entry.slotId}</td>
                      <td className="px-6 py-4">{entry.carNumber}</td>
                      <td className="px-6 py-4">{entry.time}</td>
                      <td className="px-6 py-4">
                        <button className="text-red-400">Report</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-400">No unauthorized parking detected</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

