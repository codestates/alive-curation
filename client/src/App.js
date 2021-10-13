import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import MyPage from "./pages/MyPage";
import AdminWrite from "./pages/AdminWrite";
function App() {
  const [userInfo, setUserInfo] = useState([]);

  const getDataHandler = (data) => {
    setUserInfo(data);
  };

  const changeDataHandler = ({ name }) => {
    setUserInfo({ ...userInfo, name });
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            getDataHandler={getDataHandler}
          />
        </Route>
        <Route path="/write">
          <AdminWrite />
        </Route>
        <Route path="/mypage">
          <MyPage
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            changeDataHandler={changeDataHandler}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
