import React from 'react'
import "./styles.css"
import { Avatar, Space, Typography, Button } from "antd";
import {LogoutOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
function HeaderComponent() {
    return (
    <>
    {/* <div className='container--header'>
            <div>
            <span style={{marginRight:'20px'}}>User</span>
            <LogoutOutlined />
            </div>
        </div> */}
        <Space>
        <Space style={{marginLeft: 1090}}>
          <Link to="/login">
            <Button className="Buttonheader">Đăng Xuất</Button>
          </Link>
        </Space>
      </Space>
    </>
    )
}

export default HeaderComponent