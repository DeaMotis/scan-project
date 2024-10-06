import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/Context';

import './App.css';

import './styles/fonts/ferry_black.otf';
import './styles/fonts/Inter-Regular.otf';
import './styles/fonts/Inter-Medium.otf';
import './styles/fonts/Inter-Bold.otf';

import Main from "./components/Main/Main";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import SearchForm from "./components/Search/SearchForm/SearchForm";
import Response from "./components/Response/Response";
import AuthForm from "./components/Auth/AuthForm/AuthForm";
import user_pic_example from "./images/user_pic_example.png";

const routesData = [
  { path: "/", element: <Main /> },
  { path: "/auth", element: <AuthForm /> },
  { path: "/search", element: <SearchForm /> },
  { path: "/response", element: <Response /> },
];

function App() {
  const { isLoggedIn, checkAuthStatus } = useAuth();
  const [userTariff, setUserTariff] = useState('beginner');
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState(user_pic_example);

  useEffect(() => {
    if (!isLoggedIn) {
        console.log("Пользователь не залогинен, обновите UI");
      }
  }, [isLoggedIn]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);


  return (
    <BrowserRouter>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} userName={userName} setUserName={setUserName} userPicture={userPicture} setUserPicture={setUserPicture} />
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} userTariff={userTariff} />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/search" element={isLoggedIn ? <SearchForm /> : <AuthForm redirectBack="/search" />} />
          <Route path="/results" element={isLoggedIn ? <Response /> : <AuthForm redirectBack="/results" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
