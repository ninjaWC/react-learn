import React from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>{

  return(
    <div className="nav">
        <div className="nav__items">
          <Link to="/about"> About</Link>
          <Link to="/posts"> Posts</Link>
          <Link to="/test"> Test</Link>
        </div>
      </div>
  )
}

export default Navbar;