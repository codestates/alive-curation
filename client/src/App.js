import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import MyPage from "./pages/MyPage";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <div className="App">
      <Switch>
        {/* <Route>
          <Landing exact path="/" component={Landing} />
        </Route> */}
        <Route>
          <MyPage path="/mypage" component={MyPage} userInfo={userInfo} />
        </Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
