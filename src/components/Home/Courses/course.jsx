import React from 'react';
import './course.css';
import { Layout, Menu, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const course = () => {
  return (
    <Layout>
      <Header className="heads">
            <Avatar icon={<UserOutlined />} />
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Trang chủ</Menu.Item>
              <Menu.Item key="2">Khóa học</Menu.Item>
              <Menu.Item key="3">Về chúng tôi</Menu.Item>
            </Menu>
            <Button type="primary"><Link to="/login">Đăng nhập</Link></Button>
      </Header>
        <Content>
          <div className="contents3">
              <Card
                className="card5"
                hoverable
                cover={<Link to="/detail"><img alt="example" src="https://e1.pxfuel.com/desktop-wallpaper/514/124/desktop-wallpaper-2048x2048-python-logo-ipad-air-backgrounds-and-python-code.jpg" /></Link>}
              >
                <Meta title="Python" description="6.000.000 VNĐ - 5502 lượt đăng ký" />
              </Card>
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://stitcher.imgix.net/d0306685ac66e9612a315182b01f834a0c605361e271267595a34eeda86cb85c?w=850&h=850&sat=-100" />}
              >
                <Meta title="Vue" description="2.000.000 VNĐ - 312 lượt đăng ký" />
              </Card>
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://e1.pxfuel.com/desktop-wallpaper/796/952/desktop-wallpaper-disc-c-programming-language.jpg" />}
              >
                <Meta title="C" description="6.300.000 VNĐ - 2012 lượt đăng ký" />
              </Card>
            </div>
            <div className="contents3">
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://stitcher.imgix.net/66a8a497f71e8e7fb5c4b715346459ce87fb736e5e8dc04351b9538bc0613622?w=850&h=850&sat=-100" />}
              >
                <Meta title="C#" description="1.300.000 VNĐ  - 1502 lượt đăng ký" />
              </Card>
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://e1.pxfuel.com/desktop-wallpaper/439/889/desktop-wallpaper-c-c-plus-plus.jpg" />}
              >
                <Meta title="C++" description="4.300.000 VNĐ - 1223 lượt đăng ký" />
              </Card>
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://e0.pxfuel.com/wallpapers/907/48/desktop-wallpaper-sl-5-4-and-black-friday-smartlauncher-kotlin.jpg" />}
              >
                <Meta title="Kotlin " description="5.100.000 VNĐ - 111 lượt đăng ký" />
              </Card>
            </div>
            <div className="contents3">
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://apollo-singapore.akamaized.net/v1/files/cst94eb4fu3c1-IN/image;s=850x0" />}
              >
                <Meta title="Java" description="1.100.000 VNĐ - 552 lượt đăng ký" />
              </Card>
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://e0.pxfuel.com/wallpapers/811/90/desktop-wallpaper-typescript.jpg" />}
              >
                <Meta title="TypeScript" description="3.600.000 VNĐ - 312 lượt đăng ký" />
              </Card>
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://e0.pxfuel.com/wallpapers/160/491/desktop-wallpaper-ruby-gem-png-ruby-gemstone.jpg" />}
              >
                <Meta title="Ruby" description="2.220.000 VNĐ - 642 lượt đăng ký" />
              </Card>
            </div>
        </Content>
        <Footer className="detail-footer">
          <div className="detail-email">
            <p>Email liên hệ: coderclass@gmail.com</p>
            <h5>Địa chỉ:</h5>
            <p>Cơ sở 1: Tầng 6, Tòa nhà Chigamex 22C Thành Công, Phường Thành Công, Quận Ba Đình, Hà Nội</p>
            <p>Cơ sở 2: Tầng 2, 29T1 Hoàng Đạo Thuý, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội</p>
            <p>Cơ sở 3: Tầng 6, Tòa AZ Lâm Viên, 107 Nguyễn Phong Sắc, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội</p>
          </div>
          <div className="detail-icons-footer">
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
          <div className="detail-hotline">
            <p id="leader-text">Hotline</p>
            <p>Khóa học cho sinh viên, người đi làm 024381277</p>
            <p>Khóa học cho trẻ 5-17 tuổi - Hà Nội 024723178</p>
            <p>Khóa học cho trẻ 5-17 tuổi - HCM 0287321337</p>
            <p>Khóa học cho trẻ 5-17 tuổi - Tỉnh 0247356862</p>
          </div>
          </Footer>
    </Layout>
  )
}

export default course