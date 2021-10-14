import React, { useState, useEffect } from "react";
import axios from "axios";
import ModifyInfo from "../../components/ModifyInfo/ModifyInfo";
import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import { NavBar } from "../Landing/Landing.Styled";
const MyPage = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://localhost:8080/user", {
          withCredentials: true,
        });
        const { _id, email, name, role, thumbnail } = data;
        setUser({ _id, email, name, role, thumbnail });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <NavBar>
        <NavigationBar />
      </NavBar>
      <ModifyInfo user={user} />
      <SideBar user={user} />
    </>
  );
};

export default MyPage;
