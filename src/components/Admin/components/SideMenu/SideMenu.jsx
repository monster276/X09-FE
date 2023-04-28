import React from "react";
import "./SideMenu.css";
import {
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="SideMenu">
        <Menu
          className="Menu"
          onClick={(item) => {
            // item.key
            navigate(item.key);
          }}
          items={[
            {
              label: "Trang Chủ",
              icon: <HomeOutlined />,
              key: "/admin",
            },
            {
              label: " Cơ Sở ",
              icon: <ShopOutlined />,
              key: "/admin/DSCoSo",
            },
            {
              label: "Khóa Học ",
              icon: <ReadOutlined />,
              key: "/admin/DSKH",
            },
            {
              label: " Lớp Học ",
              icon: <TeamOutlined />,
              key: "/admin/DSLH",
            },
            {
              label: "Người Dùng",
              icon: <UserOutlined />,
              key: "/admin/DSGV",
            },
            {
              label: "Đăng Ký Lớp Học ",
              icon: <ReadOutlined />,
              key: "/admin/DSDK",
            },
            
          ]}
        ></Menu>
      </div>
    </div>
  );
}

export default SideMenu;
