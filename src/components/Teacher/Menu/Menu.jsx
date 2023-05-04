import { useState } from "react";
import { Menu, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { path } from "../Router/RouterConfig";
import { Link } from "react-router-dom";
import "./Menu.css";

function MenuComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 32,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1">
          <Link to={path.classroom}>
            <span>Lớp học</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={path.lecture}>
            <span>Bài giảng</span>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="3">
          <Link to={path.register}>
            <span>DS Đăng kí Học</span>
          </Link>
        </Menu.Item> */}
        {/* <Menu.Item key="4">
          <Link to={path.classroomManagement}>
            <span>Quản lý lớp học</span>
          </Link>
        </Menu.Item> */}
        {/* <Menu.Item key="5">
          <Link to={path.facilityManagement}>
            <span>Quản lý cơ sở</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to={path.lesson}>
            <span>Bài học</span>
          </Link>
        </Menu.Item> */}
      </Menu>
    </>
  );
}
export default MenuComponent;
