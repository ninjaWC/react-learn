import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import { routes } from "../router";
import Navbar from "./UI/navbar/Navbar";

const AppRouter = ()=>{
  return(
    <Routes>
      <Route path={"/"} element={<Navbar />}>
        {routes.map((route)=>
          <Route key={route.path} Component={route.component} path={route.path} exact={route.exact}/>
        )}
      </Route>
    </Routes>
  )
}

export default AppRouter;