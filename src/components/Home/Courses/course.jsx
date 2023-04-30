import React from 'react';
import './course.css';
import { Layout, Menu, Button } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const course = () => {
  return (
    <Layout>
      <Header className="header">
              <div className="header-brand">
                <img src="https://images.pling.com/img/00/00/37/10/41/1288292/309554906fbff6e7f5e2cb96338812db66cd.png" alt="" className="brand-logo" />
                <div className="brand-name">EvoEdu</div>
              </div>
              <Menu mode="horizontal" className="header-nav" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/">Trang chủ</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/course">Khóa học</Link></Menu.Item>
              </Menu>
              <Button type="primary" size="large" className="login-btn"><Link to="/login">Đăng nhập</Link></Button>
          </Header>
        <Content>
          <h1 className='title-course'>Danh sách khóa học</h1>
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
              <Card
                className="card5"
                hoverable
                cover={<img alt="example" src="https://stitcher.imgix.net/66a8a497f71e8e7fb5c4b715346459ce87fb736e5e8dc04351b9538bc0613622?w=850&h=850&sat=-100" />}
              >
                <Meta title="C#" description="1.300.000 VNĐ  - 1502 lượt đăng ký" />
              </Card>
            </div>
            <div className="contents3">
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
            </div>
            <div className="contents3">
              <Card
                className="card6"
                hoverable
                cover={<img alt="example" src="https://e0.pxfuel.com/wallpapers/160/491/desktop-wallpaper-ruby-gem-png-ruby-gemstone.jpg" />}
              >
                <Meta title="Ruby" description="2.220.000 VNĐ - 642 lượt đăng ký" />
              </Card>
            </div>
        </Content>
        <Footer className="footer2">
            <div className="left-footer">
              <p>Email liên hệ: evoedu@gmail.com</p>
              <p>Cơ sở 1: Bắc Ninh - 09 Lê Thái Tổ</p>
              <p>Cơ sở 2: HN - 22C Thành Công</p>
              <p>Cơ sở 3: HN - 71 Nguyễn Chí Thanh</p>
            </div>
            <div className="mid-footer">
              <h6>Contact</h6>
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
            <div className="right-footer">
              <h6>Hotline</h6>
              <p>Khóa trẻ em từ 9 - 15 tuổi: 0247318266</p>
              <p>Khóa thanh thiếu niên từ 15 - 18 tuổi: 0244306256</p>
              <p>Khóa cho sinh viên, người đi làm: 02471105326</p>
            </div>
          </Footer>
    </Layout>
  )
}

export default course