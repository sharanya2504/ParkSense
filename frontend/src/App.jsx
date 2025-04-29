// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import HomePage from './pages/HomePage';
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import ForgotPassword from "./components/ForgotPassword";

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <Router>
//         <Navbar /> 
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/forgot-password" element={<ForgotPassword />}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';  // Notice the change to Routes
// import AdminDashboard from './components/AdminDashboard';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import HomePage from './pages/HomePage';
// import AdminNavbar from './components/AdminNavbar';
// import { AuthContextProvider, useAuth } from './context/AuthContext';


// function App() {
//   return (
//     <AuthContextProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/admin-dashboard" element={<PrivateRoute Component={AdminDashboard} />} />
//         </Routes>
//       </Router>
//     </AuthContextProvider>
//   );
// }

// // PrivateRoute component to guard the admin dashboard route
// const PrivateRoute = ({ Component }) => {
//   const { user } = useAuth();

//   return user ? (
//     <>
//       <AdminNavbar />
//       <Component />
//     </>
//   ) : (
//     <Redirect to="/login" />
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Notice the change to Routes
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './pages/HomePage';
import AdminNavbar from './components/AdminNavbar';
import { AuthContextProvider, useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom'; // Import Navigate
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword'; 

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard" element={<PrivateRoute Component={AdminDashboard} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
export default App;