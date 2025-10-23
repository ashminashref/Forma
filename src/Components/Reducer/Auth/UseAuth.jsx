import React, { useState, createContext, useContext, useEffect, useMemo, useCallback } from 'react';

//  context
const AuthContext = createContext();

//  provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  

  // --- Functions ---
  //login, logout,signup 
  
  const signup = useCallback((email, username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      alert("User with this email already exists!");
      return false;
    }

    const newUser = { email, username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    
    const user = { email, username };
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthenticated(true);
    return true;
  }, []);

  const login = useCallback((email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      setIsAuthenticated(true);
      return true;
    } else {
      alert("Invalid email or password!");
      return false;
    }
  }, []);

  

  const logout = useCallback(() => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsAuthenticated(false);
  }, []);
  
  const value = useMemo(() => ({
    isAuthenticated,
    currentUser,
    signup,
    login,
    logout,
  }), [isAuthenticated, currentUser, signup, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook for easy access to the context
export const useAuth = () => {
  return useContext(AuthContext);
};