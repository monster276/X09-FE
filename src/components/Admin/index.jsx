import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { getAllUsers } from "../../redux/apiRequest";
import { loginSuccess } from "../../redux/authSlice";
import "./index.css";
import { Space, Layout, theme, Menu } from "antd";
import HeaderPage from "./components/header/header";
import FooterPage from "./components/Footer/Footer";
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
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu  mode="inline">
          <SideMenu />
        </Menu>
      </Sider>
      <Layout style={{ height: "100%" }}>
        <Header
          // style={{
          //   padding: 0,
          //   background: colorBgContainer,
          // }}
        >
          <HeaderPage />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <PageContent />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          {/* <FooterPage /> */}
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
