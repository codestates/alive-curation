import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import MyPage from "./pages/MyPage";
import AdminWrite from "./pages/AdminWrite/AdminWrite";
function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isLogin, setIsLogin] = useState([]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing
            isLogin={isLogin}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setIsLogin={setIsLogin}
          />
        </Route>
        <Route path="/write">
          <AdminWrite />
        </Route>
        <Route path="/mypage">
          <MyPage
            userInfo={userInfo}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setUserInfo={setUserInfo}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
