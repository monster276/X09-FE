import React from 'react';
import "./header.css"
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Typography, Button } from 'antd';

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
        <Button type="primary" href='https://ant.design/index-cn' className='Button'> 
          Đăng Xuất 
        </Button>
      </Space>
      </div>
    </div>
  );
}

export default Header;
