import React from "react";
import "./styles.css";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Header, Footer } = Layout;

function Footer() {
  return (
    // <div className='footer1'>
    //     <div className="email">
    //     <p>Email liên hệ: coderclass@gmail.com</p>
    //     <h5>Địa chỉ:</h5>
    //     <p>Cơ sở 1: Tầng 6, Tòa nhà Chigamex 22C Thành Công, Phường Thành Công, Quận Ba Đình, Hà Nội</p>
    //     <p>Cơ sở 2: Tầng 2, 29T1 Hoàng Đạo Thuý, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội</p>
    //     <p>Cơ sở 3: Tầng 6, Tòa AZ Lâm Viên, 107 Nguyễn Phong Sắc, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội</p>
    //     </div>
    //     <div className="social-icons">
    //     <p>Contact</p>
    //     <a href="https://www.facebook.com/mindx.edu.vn/" target="_blank" rel="noopener noreferrer">
    //     <FacebookOutlined/>
    //     </a>
    //     <a href="https://twitter.com/mindx_official" target="_blank" rel="noopener noreferrer">
    //     <TwitterOutlined/>
    //     </a>
    //     <a href="https://www.youtube.com/channel/UCvZ8BKeWtJb-r1FmnYtRGrw" target="_blank" rel="noopener noreferrer">
    //     <YoutubeOutlined/>
    //     </a>
    //     </div>
    //     <div className="hotline">
    //     <p id="leader-text">Hotline</p>
    //     <p>Khóa học cho sinh viên, người đi làm 024381277</p>
    //     <p>Khóa học cho trẻ 5-17 tuổi - Hà Nội 024723178</p>
    //     <p>Khóa học cho trẻ 5-17 tuổi - HCM 0287321337</p>
    //     <p>Khóa học cho trẻ 5-17 tuổi - Tỉnh 0247356862</p>
    //     </div>
    // </div>
    <div>
      <div className="Footer">
        <Typography.Text className="Title"> MindX </Typography.Text>
      </div>
    </div>
  );
}

export default Footer;
