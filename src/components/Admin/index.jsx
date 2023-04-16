import React from "react";
import "./index.css";
import { Space } from "antd";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import PageContent from "./components/PageContent/PageContent";
import { Route, Routes } from "react-router-dom";


export default function Index() {
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
