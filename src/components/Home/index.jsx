import React from "react";
import './index.css';
import { Layout, Menu, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined  } from '@ant-design/icons';

import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function Index(props) {
    return (
        <Layout>
          <Header className="header">
              <div className="header-brand">
                <img src="https://2sao.vietnamnetjsc.vn/images/2019/06/23/16/58/ngoc-trinh-1.jpg" alt="" className="brand-logo" />
                <div className="brand-name">EvoEdu</div>
              </div>
              <Menu mode="horizontal" className="header-nav" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/">Trang chủ</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/course">Khóa học</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/detail">Chi tiết</Link></Menu.Item>
              </Menu>
              <Button type="primary" size="large" className="login-btn"><Link to="/login">Đăng nhập</Link></Button>
          </Header>
          <Content className="body">
            <div className="image">
              <img alt="brown" className="brown" src="https://i.pinimg.com/736x/e7/ac/00/e7ac001415ff285c83003022d9085b44.jpg"/>
              <h2>Tập tành làm coder với những kĩ năng:</h2>
              <ul>
                <li>Lập trình</li>
                <li>Thiết kế UI/UX</li>
                <li>Quản lý dự án</li>
                <li>Tư duy</li>
              </ul>
              <img alt="coding" className="cod" src="https://images.hdqwalls.com/wallpapers/i-love-coding-xl.jpg"/>           
            </div>
            <div className="contents1">
            <h3 id="contents1-title1">Cùng học và làm việc trong một môi trường vui vẻ, hòa đồng và đầy nhiệt huyết</h3>
            <p className="top">Các khóa học đang hot</p>
              <Card
                className="card1"
                hoverable
                cover={
                  <img alt="example" src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />
                }
              >
                  <Meta title="HTML" description="6.900.000 VNĐ - 1000 lượt đăng ký" />
              </Card>
              <Card
                className="card1"
                hoverable
                cover={<img alt="example" src="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU" />}
              >
                <Meta title="CSS" description="3.200.000 VNĐ - 485 lượt đăng ký" />
              </Card>
              <Card
                className="card1"
                hoverable
                cover={<img alt="example" src="https://play-lh.googleusercontent.com/TzsxB3RFCBKOObTn0sw9jMHx3jwwULx9_1ig1kVDdOCUcuYFJFY3Eqzm8y7IjdhXr9I" />}
              >
                <Meta title="JavaScript" description="4.500.000 VNĐ- 3502 lượt đăng ký" />
              </Card>
            </div>
            <div className="contents2">
              <Card
                className="card1"
                hoverable
                cover={<img alt="example" src="https://e1.pxfuel.com/desktop-wallpaper/514/124/desktop-wallpaper-2048x2048-python-logo-ipad-air-backgrounds-and-python-code.jpg" />}
              >
                <Meta title="Python" description="6.000.000 VNĐ - 5502 lượt đăng ký" />
              </Card>
              <Card
                className="card1"
                hoverable
                cover={<img alt="example" src="https://stitcher.imgix.net/d0306685ac66e9612a315182b01f834a0c605361e271267595a34eeda86cb85c?w=850&h=850&sat=-100" />}
              >
                <Meta title="Vue" description="2.000.000 VNĐ - 312 lượt đăng ký" />
              </Card>
              <Card
                className="card1"
                hoverable
                cover={<img alt="example" src="https://e1.pxfuel.com/desktop-wallpaper/796/952/desktop-wallpaper-disc-c-programming-language.jpg" />}
              >
                <Meta title="C" description="6.300.000 VNĐ - 2012 lượt đăng ký" />
              </Card>
            </div>
            <div className="stuff-container">
              <h3 id="contents1-title2">Những lợi ích mà bạn có thể nhận được</h3>
              <Card
                className="card3"
                hoverable
                cover={<img alt="example" src="https://resources.mindx.vn/uploads/images/anh%208-320.jpeg" />}
              >
                <ul>
                  <li>Trang bị những kiến thức, tư duy, kỹ năng số quan trọng để bắt kịp với cuộc Cách mạng Công nghệ 4.0 đang diễn ra mạnh mẽ trên khắp hành tinh</li>
                  <li>Nuôi dưỡng ước mơ và hứng thú với lĩnh vực công nghệ, tạo điều kiện để con phát triển vượt trội, trở thành nhà lãnh đạo công nghệ tương lai</li>
                  <li>Hỗ trợ chương trình học trước, trả tiền sau khi có việc làm, đem đến cơ hội tiếp cận công nghệ đồng đều cho tất cả học sinh</li>
                </ul>
              </Card>
              <Card
                className="card3"
                hoverable
                cover={<img alt="example" src="https://resources.mindx.vn/uploads/images/anh%2010-320.jpeg" />}
              >
                <ul>
                  <li>Sáng tạo ra các sản phẩm game, web, ứng dụng di động thay vì chỉ tiêu thụ công nghệ</li>
                  <li>Học thật vui và hào hứng qua các cuộc thi, trại hè, chương trình Khởi nghiệp, các buổi Hackathon, sự kiện với sự tham gia của các doanh nghiệp, nhà tuyển dụng, chuyên gia công nghệ</li>
                  <li>Đào tạo toàn diện các kỹ năng chuyên nghiệp như làm việc nhóm, tư duy sản phẩm, quy trình làm việc, v.v...</li>
                </ul>
              </Card>
              <Card
                className="card3"
                hoverable
                cover={<img alt="example" src="https://resources.mindx.vn/uploads/images/48048090432_25fb00bbc7_c%20-320.jpg" />}
              >
                <ul>
                  <li>Bảo trợ việc làm tại hơn 200 doanh nghiệp đối tác của chúng tôi tại Việt Nam, Singapore, Philippines, v.v. với mức lương lên đến $6.000/tháng</li>
                  <li>Thực tập ở vị trí quản lý dự án và lập trình viên tại các công ty công nghệ từ khi còn ngồi trên ghế nhà trường</li>
                  <li>Tự tin chuẩn bị hồ sơ du học/học bổng với các dự án thực chiến xuyên suốt quá trình học, các buổi hội thảo sửa CV và định hướng nghề nghiệp 1-1 với chuyên gia</li>
                </ul>
              </Card>
            </div>
            <Link to="/course"><Button className="btn1">Danh sách khóa học</Button></Link>
          </Content>
          <Footer className="footer1">
          <div className="email">
            <p>Email liên hệ: coderclass@gmail.com</p>
            <h5>Địa chỉ:</h5>
            <p>Cơ sở 1: Tầng 6, Tòa nhà Chigamex 22C Thành Công, Phường Thành Công, Quận Ba Đình, Hà Nội</p>
            <p>Cơ sở 2: Tầng 2, 29T1 Hoàng Đạo Thuý, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội</p>
            <p>Cơ sở 3: Tầng 6, Tòa AZ Lâm Viên, 107 Nguyễn Phong Sắc, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội</p>
          </div>
          <div className="social-icons">
            <p>Contact</p>
            <a href="https://www.facebook.com/mindx.edu.vn/" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined/>
            </a>
            <a href="https://twitter.com/mindx_official" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined/>
            </a>
            <a href="https://www.youtube.com/channel/UCvZ8BKeWtJb-r1FmnYtRGrw" target="_blank" rel="noopener noreferrer">
              <YoutubeOutlined/>
            </a>
          </div>
          <div className="hotline">
            <p id="leader-text">Hotline</p>
            <p>Khóa học cho sinh viên, người đi làm 024381277</p>
            <p>Khóa học cho trẻ 5-17 tuổi - Hà Nội 024723178</p>
            <p>Khóa học cho trẻ 5-17 tuổi - HCM 0287321337</p>
            <p>Khóa học cho trẻ 5-17 tuổi - Tỉnh 0247356862</p>
          </div>
          </Footer>
        </Layout>
      );
    };


