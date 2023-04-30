import React, { useState } from "react";
import './Detail.css';
import { Layout, Menu, Button, Card, Modal, Select, Input } from 'antd';
import { Link } from 'react-router-dom';
import { TeamOutlined, ClockCircleOutlined, CalendarOutlined, CheckOutlined } from '@ant-design/icons';
import { FacebookOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Detail = () => {
  const [open, setOpen] = useState(false);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
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
                <Button className="detail-btn" onClick={() => setOpen(true)}>
                  Đăng Ký Khóa Học
                </Button>
                <Modal
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  className="modal-content"
                  width={1000}   
                  okText="Đăng Ký"  
                  cancelButtonProps={{ style: { fontSize: '20px', padding: '10px 20px', height: '50px', background: 'white', color: "black"  } }}
                  okButtonProps={{ style: { fontSize: '20px', padding: '10px 20px', height: '50px', background: 'white', color: "black"} }}
                >
                  <h1>Đăng Ký</h1>
                  <p>Khóa học: python</p>
                  <div className="modal-information">
                    <p>Cơ sở:</p>
                    <Select
                      showSearch
                      placeholder="Chọn cơ sở"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: 'Cơ sở 1',
                          label: 'Cơ sở 1',
                        },
                        {
                          value: 'Cơ sở 2',
                          label: 'Cơ sở 2',
                        },
                        {
                          value: 'Cơ sở 3',
                          label: 'Cơ sở 3',
                        },
                      ]}
                    />
                    <p>Họ và Tên:</p>
                    <Input placeholder="Nhập vào đây" className="custom-input" />
                    <p>Email:</p>
                    <Input placeholder="Nhập vào đây" className="custom-input" />
                    <p>Số điện thoại:</p>
                    <Input placeholder="Nhập vào đây" className="custom-input" />
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