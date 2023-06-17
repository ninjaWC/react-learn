import React, { useContext } from "react";
import {Link, Outlet} from "react-router-dom";
import { AuthContext } from "../../context";
import MyButton from "../button/MyButton";

const Navbar = ()=>{
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = ()=>{
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return(
    <>
      <div className="nav">
        <MyButton 
          onClick={logout}
        >Log-out</MyButton>
          <div className="nav__items">
            <Link to="/about"> About</Link>
            <Link to="/posts"> Posts</Link>
            <Link to="/test"> Test</Link>
          </div>
      </div>
    </>
  )
}

export default Navbar;