import React from "react";
import "./index.css";

import { Space } from "antd";
import Header from "./header/header";
import Footer from "./Footer/Footer";
import SideMenu from "./SideMenu/SideMenu";
import PageContent from "./PageContent/PageContent";

export default function Index(props) {
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
