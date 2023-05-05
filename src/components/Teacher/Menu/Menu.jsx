import { useState } from "react";
import { Menu, Button, Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { path } from "../Router/RouterConfig";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  HomeOutlined,
  ReadOutlined,
} from "@ant-design/icons";
function MenuComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <img
        src="	https://images.pling.com/img/00/00/37/10/41/1288292/309554906fbff6e7f5e2cb96338812db66cd.png"
        style={{
          height: 100,
          width: 130,
          marginLeft: 31,
          marginTop: 5,
        }}
      />
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 32,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" style={{ marginTop: 30 }}>
          <Link to={path.classroom}>
            <Space>
              <HomeOutlined style={{ fontSize: 15, marginBottom: 15 }} />
              <span>Lớp học</span>
            </Space>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={path.lecture}>
            <Space>
              <ReadOutlined style={{ fontSize: 15, marginBottom: 15 }} />
              <span>Bài giảng</span>
            </Space>
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
