import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRole }) {
  const { user } = useAuth();

  // If no one is logged in, kick them back to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If they are logged in but don't have the right clearance, kick them to home
  if (user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // If they pass the checks, let them see the page!
  return children;
}