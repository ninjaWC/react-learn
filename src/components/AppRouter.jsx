import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import { routes } from "../router";

const AppRouter = ()=>{
  return(
    <Routes>
        {routes.map((route)=>
          <Route key={route.path} component={route.Component} path={route.path} exact={route.exact}/>
        )}
    </Routes>
  )
}

export default AppRouter;