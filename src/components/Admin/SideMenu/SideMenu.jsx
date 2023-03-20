import React from 'react';
import './SideMenu.css';
import { HomeOutlined ,ShopOutlined ,TeamOutlined ,ReadOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { Menu } from "antd";



function SideMenu() {
  const navigate = useNavigate();
  return (
    <div> 
      <div className='SideMenu'>
        <Menu className='Menu'
        onClick={(item)=>{
            // item.key
            navigate(item.key);
        }}
          items = {[
            {
              label: "Home",
              icon: <HomeOutlined  />,
              key:"/"
            },
            {
              label:"DS Cơ Sở ",
              icon: <ShopOutlined />,
              key:'/DSCoSo'
            },
            {
              label:"DS Giảng Viên",
              icon: <UserOutlined />,
              key:'/DSGV'
            },
            {
              label:"DS Lớp Học ",
              icon: <TeamOutlined />,
              key:'/DSLH'
            },
            {
              label:"DS Khóa Học ",
              icon: <ReadOutlined />,
              key:'/DSKH'
            }
          ]}
          ></Menu>
      </div>
    </div>
  );
}

export default SideMenu;
