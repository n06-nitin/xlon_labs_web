import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    // Send them to their specific dashboard after logging in
    if (role === 'developer') navigate('/dev');
    if (role === 'consumer') navigate('/portal');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-xlon-bg text-white gap-8">
      <h1 className="text-4xl font-display uppercase tracking-widest text-xlon-accent">Authentication Node</h1>
      
      <div className="flex gap-4">
        <button 
          onClick={() => handleLogin('consumer')}
          className="px-6 py-3 border border-xlon-muted hover:border-white transition rounded uppercase text-sm tracking-wider"
        >
          Login as Consumer
        </button>
        
        <button 
          onClick={() => handleLogin('developer')}
          className="px-6 py-3 bg-xlon-accent hover:bg-white hover:text-black transition rounded uppercase text-sm tracking-wider font-bold"
        >
          Login as Developer
        </button>
      </div>
    </div>
  );
}