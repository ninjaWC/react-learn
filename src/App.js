import React,{useState,useMemo, useEffect} from "react";
// import axios from "axios";
import "./style/App.css";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";


function App() {
  return(
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
