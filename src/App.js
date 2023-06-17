import React,{useState,useMemo, useEffect} from "react";
// import axios from "axios";
import "./style/App.css";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { AuthContext } from "./components/context";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  }, []);

  return(
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
