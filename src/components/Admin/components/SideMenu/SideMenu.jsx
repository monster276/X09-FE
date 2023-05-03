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
import { Menu, Space, Layout, ConfigProvider, theme, Button } from "antd";
import { Link } from "react-router-dom";
function SideMenu() {
  const {
    token: { colorBgActive },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Space direction="vertical" className="img">
          <Space wrap size={16}>
            <img
              src="https://cei.vn/wp-content/uploads/2019/08/khoa-hoc-va-hoc-phi-tai-trung-tam-anh-ngu-langmaster.jpg"
              style={{
                height: 120,
                width: 120,
                marginLeft: 31,
                marginTop: 5,
              }}
            />
            {/* <Avatar size={45} icon={<UserOutlined />} className="Avatar" /> */}

            <Menu
              className="Menu"
              onClick={(item) => {
                // item.key
                navigate(item.key);
              }}
              items={[
                {
                  label: "Trang Chủ",
                  icon: <HomeOutlined style={{ fontSize: 20 }} />,
                  key: "/admin",
                },
                {
                  label: " Cơ Sở ",
                  icon: <ShopOutlined style={{ fontSize: 20 }} />,
                  key: "/admin/DSCoSo",
                },
                {
                  label: "Khóa Học ",
                  icon: <ReadOutlined style={{ fontSize: 20 }} />,
                  key: "/admin/DSKH",
                },
                {
                  label: " Lớp Học ",
                  icon: <TeamOutlined style={{ fontSize: 20 }} />,
                  key: "/admin/DSLH",
                },
                {
                  label: "Người Dùng",
                  icon: <UserOutlined style={{ fontSize: 20 }} />,
                  key: "/admin/DSGV",
                },
                {
                  label: "Đăng Ký Lớp Học ",
                  icon: <ReadOutlined style={{ fontSize: 20 }} />,
                  key: "/admin/DSDK",
                },
              ]}
            ></Menu>
          </Space>
          {/* <Space style={{ fontSize: 20, marginTop:260, marginLeft:15 }} >
            <Link to="/login">
              <Button className="Buttonheader" >Đăng Xuất</Button>
            </Link>
          </Space> */}
        </Space>
      </div>
    </div>
  );
}

export default SideMenu;
