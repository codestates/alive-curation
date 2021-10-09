import { BrowserRouter, Switch, Route, useHistory, Link, Redirect } from "react-router-dom"
import { useState } from "react"
import Home from "./Home"
import HomeButton from "./components/Button/HomeButton"
import LoginButton from "./components/Button/LoginButton"
import LogoutButton from "./LogoutButton"
import Profile from "./pages/Profile"
import AuthRoute from "./AuthRoute"
import LoginForm from "./LoginForm"
import Login from "./pages/Login.js"
import Landing from "./pages/Landing"


function App( props ) {

  // let isAuthorized = sessionStorage.getItem("isAuthorized");


  return (
    <div>
      <BrowserRouter>
        <Link to="/">
          <HomeButton/>
        </Link>
        <Link to="/login">
          <LoginButton/>
        </Link>
          <Switch>
            <Route exact path="/" component={Home} />
            {props.isLoggedIn ? (
              <Route path="/user/profile" component={Profile}>
                <LogoutButton/>
              </Route>

            ):(
              <Redirect to={{
                  pathname : '/login',
                  state: { from: props.location } 
              }} />
            )}
          </Switch>
      </BrowserRouter>
    </div>

    // <div>
    //   {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/" />}
    //   <Switch>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     <Route path="/">
    //       <HomeButton />
    //     </Route>
    //   </Switch>
    // </div>
  );
}

export default App;
