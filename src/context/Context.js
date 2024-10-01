import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthStatus = () => {
    const accessToken = localStorage.getItem('accessToken');
    const tokenExpire = localStorage.getItem('tokenExpire');
    const now = new Date();
    if (!accessToken || !tokenExpire || new Date(tokenExpire) <= now) {
      console.log("Token expired or not found.");
      setIsLoggedIn(false);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('tokenExpire');
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <Context.Provider value={{ isLoggedIn, setIsLoggedIn, checkAuthStatus }}>
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
