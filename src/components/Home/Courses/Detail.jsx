import React, { useState } from "react";
import './Detail.css';
import { Layout, Menu, Button, Card, Select, Input  } from 'antd';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { TeamOutlined, ClockCircleOutlined, CalendarOutlined, CheckOutlined,CloseOutlined } from '@ant-design/icons';
import { FacebookOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
                <Menu.Item key="3"><Link to="/detail">Chi tiết</Link></Menu.Item>
              </Menu>
              <Button type="primary" size="large" className="login-btn"><Link to="/login">Đăng nhập</Link></Button>
          </Header>
        <Content>
            <div className="container">
                <h4>Khóa học python</h4>
                <div className="des-course">
                  <img alt="idk" src="https://www.freecodecamp.org/news/content/images/2022/02/Banner-10.png"/>
                  <p>Khóa học Python của EvoEdu dạy các kiến thức cơ bản về Python, từ cú pháp, biến, hàm, vòng lặp, điều kiện đến phát triển các ứng dụng đơn giản sử dụng framework Flask. Bạn sẽ học được kiến thức lý thuyết và thực hành để phát triển các ứng dụng Python cơ bản của riêng bạn.</p>
                </div>
                <div className="detail-content1">
                  <Card
                    className="detail-card"
                    bordered={false}
                  >
                    <TeamOutlined  className="detail-icons"/>
                    <h4 id="card-heading">Đối tượng</h4>
                    <p>Những người hiện chưa có kiến thức nền tảng </p>
                  </Card>
                  <Card
                    className="detail-card"
                    bordered={false}
                  >
                    <ClockCircleOutlined  className="detail-icons"/>
                    <h4 id="card-heading">Thời gian học</h4>
                    <p>2 buổi/tuần - 3h/buổi</p>
                  </Card>
                  <Card
                    className="detail-card"
                    bordered={false}
                  >
                    <CalendarOutlined className="detail-icons"/>
                    <h4 id="card-heading">Số buổi</h4>
                    <p>16 buổi</p>
                  </Card>
                  <Card
                    className="detail-card"
                    bordered={false}
                  >
                    <CheckOutlined className="detail-icons"/>
                    <h4 id="card-heading">Số học viên</h4>
                    <p>10-15 học viên/ nhóm lớp. Mentor theo dõi sát sao</p>
                  </Card>
                </div>
                <div className="detail-content2">
                  <Card
                    className="detail-card1"
                    bordered={false}
                  >
                    <img alt="sthing" src="https://resources.mindx.edu.vn/uploads/images/IMG_0047NVL.jpg"/>
                    <h4 id="card-heading">Học thật làm thật</h4>
                    <p>Trong lớp, học viên sẽ được thực hành thông qua dự án theo nhóm và giải tình huống thực tế. Tại MindX, bạn được học lý thuyết và áp dụng ngay vào việc làm project xuyên suốt kỳ học. Kết thúc khóa học bỏ túi ít nhất 3 sản phẩm thực tiễn cao. </p>
                  </Card>
                  <Card
                    className="detail-card1"
                    bordered={false}
                  >
                    <img alt="sthing" src="https://resources.mindx.edu.vn/uploads/images/img_0695_optimized.jpg"/>
                    <h4 id="card-heading">Học bài bản</h4>
                    <p>Học viên được đào tạo theo lộ trình từ bài bản với những kiến thức cô đọng, trọng tâm trong thời gian ngắn để phục vụ cho làm việc thực tế tại các doanh nghiệp.</p>
                  </Card>
                  <Card
                    className="detail-card1"
                    bordered={false}
                  >
                    <img alt="sthing" src="https://resources.mindx.edu.vn/uploads/images/img_0601_optimized.jpg"/>
                    <h4 id="card-heading">Cam kết việc làm </h4>
                    <p>Được cam kết đầu ra, hỗ trợ giới thiệu việc làm, gần như 100% các bạn sinh viên có khả năng đi làm fulltime có việc ngay sau khi tốt nghiệp MindX.</p>
                  </Card>
                  <Card
                    className="detail-card1"
                    bordered={false}
                  >
                    <img alt="sthing" src="https://resources.mindx.edu.vn/uploads/images/photo_2022-11-08%2015.14.46.jpeg"/>
                    <h4 id="card-heading">Mở rộng networking </h4>
                    <p>Học viên được mentor, giảng viên giàu kinh nghiệm thực chiến tại các tập đoàn lớn hướng dẫn, đồng hành. Thắc mắc ở đâu, hỏi ngay ở đó, sẽ giúp bạn tiến bộ nhanh hơn gấp nhiều lần.</p>
                  </Card>
                </div>
                <Button className="detail-btn" onClick={handleOpenModal}>
                  Đăng Ký Khóa Học
                </Button>
                <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
                  <CloseOutlined className="regis-btn" onClick={handleCloseModal}/>
                  <div className="regis-container">
                    <div className="regis-pic">
                      <img alt="idk" src="https://media.istockphoto.com/id/1146311489/vi/anh/n%C3%BAt-register-tr%C3%AAn-b%C3%A0n-ph%C3%ADm-m%C3%A1y-t%C3%ADnh.jpg?s=170667a&w=0&k=20&c=b2JXZkTnmi1IE5baGUsYA1qBXJgXwOJy2cGVEtXnt94="/>
                    </div>
                    <div className="register-title">
                      <h2>Đăng ký khóa học</h2>
                      <Select className="select-regis"defaultValue="Chọn cơ sở" style={{ width: 120 }}>
                        <Option value="Cơ sở 1">Cơ sở 1</Option>
                        <Option value="Cơ sở 2">Cơ sở 2</Option>
                        <Option value="Cơ sở 3">Cơ sở 3</Option>
                      </Select>
                      <p>Họ và tên:</p>
                      <Input placeholder="Nhập vào đây" className="regis-input"/>
                      <p>Email:</p>
                      <Input placeholder="Nhập vào đây" className="regis-input"/>
                      <p>Số điện thoại:</p>
                      <Input placeholder="Nhập vào đây" className="regis-input"/>
                      <Button className="regis-submit">Đăng ký</Button>
                    </div>
                  </div>
                </Modal>
            </div>
        </Content>
        <Footer className="footer3">
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

export default Detail