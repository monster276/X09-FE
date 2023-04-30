import React from "react";
import "./index.css";
import { Layout, Menu, Button, Card, Image, Typography, Popover } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SmileOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Index(props) {
  const content1 = (
    <Paragraph className="paragraph-large">
      <h2 id="title-det">Khóa học Python</h2>
      <ul>
        <li>5502 lượt đăng ký</li>
        <li>6.000.000 VNĐ</li>
        <li>Học ngôn ngữ lập trình Python cơ bản</li>
      </ul>
    </Paragraph>
  );

  const content2 = (
    <Paragraph className="paragraph-large">
      <h2 id="title-det">Khóa học Vue</h2>
      <ul>
        <li>312 lượt đăng ký</li>
        <li>2.000.000 VNĐ</li>
        <li>Học ngôn ngữ lập trình Vue cơ bản</li>
      </ul>
    </Paragraph>
  );

  const content3 = (
    <Paragraph className="paragraph-large">
      <h2 id="title-det">Khóa học C</h2>
      <ul>
        <li>5502 lượt đăng ký</li>
        <li>6.300.000 VNĐ</li>
        <li>Học ngôn ngữ lập trình C cơ bản</li>
      </ul>
    </Paragraph>
  );

  const content4 = (
    <Paragraph className="paragraph-large">
      <h2 id="title-det">Khóa học C#</h2>
      <ul>
        <li>1502 lượt đăng ký</li>
        <li>1.300.000 VNĐ</li>
        <li>Học ngôn ngữ lập trình C# cơ bản</li>
      </ul>
    </Paragraph>
  );

  const content5 = (
    <Paragraph className="paragraph-large">
      <h2 id="title-det">Khóa học C++</h2>
      <ul>
        <li>1223 lượt đăng ký</li>
        <li>4.300.000 VNĐ</li>
        <li>Học ngôn ngữ lập trình C++ cơ bản</li>
      </ul>
    </Paragraph>
  );

  const content6 = (
    <Paragraph className="paragraph-large">
      <h2 id="title-det">Khóa học Kotlin</h2>
      <ul>
        <li>111 lượt đăng ký</li>
        <li>5.100.000 VNĐ</li>
        <li>Học ngôn ngữ lập trình Kotlin cơ bản</li>
      </ul>
    </Paragraph>
  );

  return (
    <Layout>
      <Header className="header">
        <div className="header-brand">
          <img
            src="https://images.pling.com/img/00/00/37/10/41/1288292/309554906fbff6e7f5e2cb96338812db66cd.png"
            alt=""
            className="brand-logo"
          />
          <div className="brand-name">EvoEdu</div>
        </div>
        <Menu
          mode="horizontal"
          className="header-nav"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <Link to="/">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/course">Khóa học</Link>
          </Menu.Item>
        </Menu>
        <Button type="primary" size="large" className="login-btn">
          <Link to="/login">Đăng nhập</Link>
        </Button>
      </Header>
      <Content className="body">
        <div className="banner">
          <h1>
            Cải thiện kỹ năng lập trình với EvoEdu - Nơi học tập và phát triển
            kỹ năng lập trình chuyên nghiệp
          </h1>
        </div>
        <div className="des">
          <img
            alt="sthing"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <p>
            EvoEdu là trang web đào tạo lập trình chuyên nghiệp với chương trình
            đào tạo đa dạng và phong phú. Các giảng viên của chúng tôi là các
            chuyên gia lập trình có kinh nghiệm lâu năm trong ngành và luôn cập
            nhật những kiến thức mới nhất. Trang web của chúng tôi dành cho tất
            cả các đối tượng học viên, từ người mới bắt đầu đến những người muốn
            nâng cao kỹ năng của mình.
          </p>
        </div>
        <h5 id="content-path">EvoEdu cùng các lộ trình dành cho</h5>
        <div className="path">
          <Card className="path-card1">
            <SmileOutlined style={{ fontSize: "32px" }} />
            <Title level={3}>Trẻ em</Title>
            <Paragraph style={{ fontSize: "28px" }}>
              Độ tuổi từ 9 đến 15 tuổi
            </Paragraph>
          </Card>
          <Card className="path-card2">
            <UserOutlined style={{ fontSize: "32px" }} />
            <Title level={3}>Thanh thiếu niên</Title>
            <Paragraph style={{ fontSize: "28px" }}>
              Độ tuổi từ 15 đến 18 tuổi
            </Paragraph>
          </Card>
          <Card className="path-card3">
            <UserSwitchOutlined style={{ fontSize: "32px" }} />
            <Title level={3}>Người lớn</Title>
            <Paragraph style={{ fontSize: "28px" }}>
              Độ tuổi từ sinh viên đến đi làm
            </Paragraph>
          </Card>
        </div>
        <div className="spec">
          <div className="course1">
            <Card hoverable>
              <Popover content={content1} placement="center">
                <Image src="https://e1.pxfuel.com/desktop-wallpaper/514/124/desktop-wallpaper-2048x2048-python-logo-ipad-air-backgrounds-and-python-code.jpg" />
              </Popover>
            </Card>
            <Card hoverable>
              <Popover content={content2} placement="center">
                <Image src="https://stitcher.imgix.net/d0306685ac66e9612a315182b01f834a0c605361e271267595a34eeda86cb85c?w=850&h=850&sat=-100" />
              </Popover>
            </Card>
            <Card hoverable>
              <Popover content={content3} placement="center">
                <Image src="https://e1.pxfuel.com/desktop-wallpaper/796/952/desktop-wallpaper-disc-c-programming-language.jpg" />
              </Popover>
            </Card>
          </div>
          <div className="course2">
            <Card hoverable>
              <Popover content={content4} placement="center">
                <Image src="https://stitcher.imgix.net/66a8a497f71e8e7fb5c4b715346459ce87fb736e5e8dc04351b9538bc0613622?w=850&h=850&sat=-100" />
              </Popover>
            </Card>
            <Card hoverable>
              <Popover content={content5} placement="center">
                <Image src="https://e1.pxfuel.com/desktop-wallpaper/439/889/desktop-wallpaper-c-c-plus-plus.jpg" />
              </Popover>
            </Card>
            <Card hoverable>
              <Popover content={content6} placement="center">
                <Image src="https://e0.pxfuel.com/wallpapers/907/48/desktop-wallpaper-sl-5-4-and-black-friday-smartlauncher-kotlin.jpg" />
              </Popover>
            </Card>
          </div>
          <Button className="landing-btn">
            <Link to="/course">Khám phá các khóa học ở đây</Link>
          </Button>
        </div>
      </Content>
      <Footer className="footer1">
        <div className="left-footer">
          <p>Email liên hệ: evoedu@gmail.com</p>
          <p>Cơ sở 1: Bắc Ninh - 09 Lê Thái Tổ</p>
          <p>Cơ sở 2: HN - 22C Thành Công</p>
          <p>Cơ sở 3: HN - 71 Nguyễn Chí Thanh</p>
        </div>
        <div className="mid-footer">
          <h6>Contact</h6>
          <a
            href="https://www.facebook.com/mindx.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined className="icon-footer" />
          </a>
          <a
            href="https://twitter.com/mindx_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined className="icon-footer" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvZ8BKeWtJb-r1FmnYtRGrw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeOutlined className="icon-footer" />
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
  );
}
