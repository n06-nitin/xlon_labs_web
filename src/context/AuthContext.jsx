import { createContext, useContext, useState } from 'react';

// Create the memory bank
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // state to hold our user data. null means not logged in.
  const [user, setUser] = useState(null); 

  // Functions to change the user's state
  const login = (role) => setUser({ role: role });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// A custom hook so other files can easily grab the auth data
export const useAuth = () => useContext(AuthContext);