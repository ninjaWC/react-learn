import React, { useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import Posts from "../pages-rout/Posts";
import { AuthContext } from "./context";

const AppRouter = ()=>{
  const {isAuth} = useContext(AuthContext);
  
  return(
    isAuth
    ?
    <Routes>
      <Route path="/" element={<Posts/>}/>
      {privateRoutes.map((route)=>
        <Route key={route.path} Component={route.component} path={route.path} />
      )}
    </Routes>

    :
    <Routes>
        {publicRoutes.map((route)=>
          <Route key={route.path} Component={route.component} path={route.path}/>
        )}
        <Route
            path="*"
            element={<Navigate to="login" />}
        />
    </Routes>
  )
}

export default AppRouter;