import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

import logo from '../assets/xlon_labs_icon.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/missions', label: 'Missions' },
  { path: '/updates', label: 'Blogs' },
  { path: '/join', label: 'Careers' },
];

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full h-24 px-[5%] flex items-center justify-between bg-[#050507]/70 backdrop-blur-xl border-b border-white/[0.04] z-50 transition-all duration-500">
        
        {/* Brand Identity */}
        <motion.div initial="hidden" animate="visible" variants={fadeDown} className="z-50">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="Xlon Labs" 
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
            />
            <span className="text-lg font-display tracking-[0.25em] text-white font-medium">
              XLON LABS
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          className="hidden md:flex gap-10 items-center"
        >
          {navLinks.map(({ path, label }) => (
            <motion.div key={label} variants={fadeDown}>
              <NavLink 
                to={path} 
                className={({ isActive }) => `
                  text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative
                  ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-200'}
                `}
              >
                {label}
              </NavLink>
            </motion.div>
          ))}

          {/* Auth State Button */}
          {!user ? (
            <motion.div variants={fadeDown}>
              <NavLink 
                to="/" 
                className="px-6 py-3 border border-slate-700 text-xs uppercase tracking-[0.2em] text-slate-300 hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-sm ml-4"
              >
                Login
              </NavLink>
            </motion.div>
          ) : (
            <motion.div variants={fadeDown} className="flex items-center gap-6 ml-4">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
                ID: {user.role}
              </span>
              <button 
                onClick={logout} 
                className="text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors duration-300"
              >
                Disconnect
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Mobile Menu Toggle Button */}
        <motion.button 
          initial="hidden"
          animate="visible"
          variants={fadeDown}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 text-slate-300 hover:text-white transition-colors p-2"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </motion.button>
      </nav>

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050507]/95 backdrop-blur-2xl flex flex-col items-center justify-center pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-10 w-full max-w-sm">
              {navLinks.map(({ path, label }) => (
                <NavLink 
                  key={label}
                  to={path} 
                  className={({ isActive }) => `
                    text-lg uppercase tracking-[0.2em] transition-colors duration-300 w-full text-center pb-4 border-b border-white/5
                    ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-200'}
                  `}
                >
                  {label}
                </NavLink>
              ))}

              <div className="pt-4 w-full flex justify-center">
                {!user ? (
                  <NavLink 
                    to="/login" 
                    className="px-8 py-4 w-full text-center border border-slate-700 text-sm uppercase tracking-[0.2em] text-slate-300 hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
                  >
                    Login
                  </NavLink>
                ) : (
                  <div className="flex flex-col items-center gap-6 w-full text-center">
                    <span className="text-sm uppercase tracking-[0.2em] text-slate-500 border-b border-white/5 pb-4 w-full">
                      ID: {user.role}
                    </span>
                    <button 
                      onClick={logout} 
                      className="text-sm uppercase tracking-[0.2em] text-red-500/80 hover:text-red-400 transition-colors duration-300"
                    >
                      Disconnect Sequence
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
