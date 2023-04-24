import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { getAllUsers } from "../../redux/apiRequest";
import { loginSuccess } from "../../redux/authSlice";
import "./index.css";
import { Space } from "antd";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import PageContent from "./components/PageContent/PageContent";
import { Route, Routes } from "react-router-dom";

    export default function Index() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

 useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch,axiosJWT);
    }
  }, []);
  return (
    <div className="AdminApp">
        <Header />
        <Space className="SideMenuAndPage">
          <SideMenu />
          <PageContent />
        </Space>
        <Footer />
    </div>
  );
}
