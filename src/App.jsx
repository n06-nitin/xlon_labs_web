import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import ConsumerPortal from './pages/ConsumerPortal';
import DevDashboard from './pages/DevDashboard';

// 1. Import the new pages
import Missions from './pages/Missions';
import Blogs from './pages/ResearchLog';
import Careers from './pages/Careers';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        {/* Added the main wrapper from your theme to keep backgrounds consistent */}
        <main className="min-h-screen bg-[#050507]">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* 2. Map the routes to your actual components */}
            <Route path="/missions" element={<Missions />} />
            <Route path="/updates" element={<Blogs />} />
            <Route path="/join" element={<Careers />} />
            
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
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
