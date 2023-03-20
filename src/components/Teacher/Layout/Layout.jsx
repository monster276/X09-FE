import { Layout, Space } from 'antd';
import MenuComponent from '../Menu/Menu';
import HeaderComponent from '../Header/Header';
import "./Layout.css"

const { Header, Footer, Sider, Content } = Layout;
const LayoutComponent = (props) => {
  
  return (
    <Space direction="vertical" style={{ width: "100%"}} size={[0, 48]}>
      <Layout>
        <Sider style={{height:"100vh"}} >
        <MenuComponent></MenuComponent>
        </Sider>
        <Layout>
          <Header style={{backgroundColor:"#BAA3A3" ,color:"#fff"}}>
            <HeaderComponent/>
          </Header>
          <Content>{props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};
export default LayoutComponent;
