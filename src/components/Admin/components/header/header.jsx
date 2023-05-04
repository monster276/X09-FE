import React from "react";
import "./header.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography, Button } from "antd";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Space>
        <Space style={{marginLeft: 1090}}>
          <Link to="/login">
            <Button className="Buttonheader">Đăng Xuất</Button>
          </Link>
        </Space>
      </Space>
    </>
    // <div >
    //   <div className='Header'>
    //   <Space direction="vertical" size={16} >
    //     <Space wrap size={16}>
    //       <img src="https://cei.vn/wp-content/uploads/2019/08/khoa-hoc-va-hoc-phi-tai-trung-tam-anh-ngu-langmaster.jpg" style={{
    //         width: 75,
    //         marginLeft: 20,
    //         marginTop:5
    //       }} />
    //       {/* <Avatar size={45} icon={<UserOutlined />} className="Avatar" /> */}
    //     </Space>
    //   </Space>
    //   <Typography.Title >Trang Quản Lý</Typography.Title>

    //   </div>
    // </div>
  );
}

export default Header;
