import MenuComponent from "../Menu/Menu";
import HeaderComponent from "../Header/Header";
import {  Layout, theme, Menu } from "antd";
import "./Layout.css";
const { Header, Content, Footer, Sider } = Layout;
//const { Header, Footer, Sider, Content } = Layout;
const LayoutComponent = (props) => {
  console.log(props.children);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
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
        <Menu mode="inline">
        <MenuComponent></MenuComponent>
        </Menu>
      </Sider>
      <Layout style={{ height: "100%" }}>
        <Header
        // style={{
        //   padding: 0,
        //   background: colorBgContainer,
        // }}
        >
           <HeaderComponent/>
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
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize:"22px"
          }}
        >
          {/* <FooterPage /> */}
         EVO EDU ©2023 Web Training Management
        </Footer>
      </Layout>
    </>
  );
};
export default LayoutComponent;
  