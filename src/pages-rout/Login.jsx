import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../components/context";

const Login = ()=>{
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  function login(e){
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return(
    <div style={{marginTop:'60px'}}>
      <h1 style={{textAlign:"center"}}>
          Welcome!
      </h1>
      <div className="login">
        <form onSubmit={login}>
          <MyInput placeholder="email or phone...."/>
          <MyInput placeholder="password"/>
          <MyButton>Login</MyButton>
        </form>
      </div>
    </div>
  )
}

export default Login;