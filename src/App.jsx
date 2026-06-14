import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar'; // Import the new, structured Navbar

import Home from './pages/Home';
import Login from './pages/Login';
import ConsumerPortal from './pages/ConsumerPortal';
import DevDashboard from './pages/DevDashboard';

// Placeholder components for new pages
function Placeholder({ title }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-xlon-bg text-white">
      <h1 className="text-4xl font-display text-xlon-muted">{title}</h1>
    </div>
  );
}

const Missions = () => <Placeholder title="Missions (Project: Cognitive Offloading)" />;
const Updates = () => <Placeholder title="Research Log (Vlog/Current Work)" />;
const JoinTeam = () => <Placeholder title="Join the Mission (Apply Now)" />;

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Replace temporary nav with new visual navbar */}
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Conceptual multi-file pages with content to update what you are currently doing */}
          <Route path="/missions" element={<Missions />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/join" element={<JoinTeam />} />
          
          {/* Secure Routes */}
          <Route 
            path="/portal" 
            element={
              <ProtectedRoute allowedRole="consumer">
                <ConsumerPortal />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dev" 
            element={
              <ProtectedRoute allowedRole="developer">
                <DevDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}