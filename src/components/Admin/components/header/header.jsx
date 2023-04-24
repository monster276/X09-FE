import React from 'react';
import "./header.css"
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Typography, Button } from 'antd';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div >
      <div className='Header'>
      <Space direction="vertical" size={16} >
        <Space wrap size={16}>
          <Avatar size={45} icon={<UserOutlined />} className="Avatar" />
        </Space>
      </Space>
      <Typography.Title>Admin</Typography.Title>
      <Space>
        <Link to="/login">
          <Button type="primary"   className='Buttonheader'> 
            Đăng Xuất 
          </Button>
        </Link>
      </Space>
      </div>
    </div>
  );
}

export default Header;
