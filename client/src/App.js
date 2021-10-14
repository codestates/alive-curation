import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
// import MyPage from "./pages/MyPage";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        {/* <Route path="/mypage">
          <MyPage />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
