import React, { useState, useContext, useEffect } from "react";
import { Layout, Menu, Button, Card } from "antd";
import { Link, useParams } from "react-router-dom";
import landing from '../../../images/landing2.jpg'

import "./Detail.css";
import {
  TeamOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import CourseContext from "../Context/course/CourseContext";
import EnrollCourse from "./EnrollCourse";
import { alignProperty } from "@mui/material/styles/cssUtils";

const { Header, Content, Footer } = Layout;

const Detail = () => {
  const courseContext = useContext(CourseContext);
  const { getCourseDetail, course } = courseContext;
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCourseDetail(id);
    // eslint-disable-next-line
  }, [id]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout >
      <div className="container-body">  
      <Header className="header">
        <div className="header-brand">
          <img
            src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
            alt=""
            className="brand-logo"
          />
          <div className="brand-name"><Link to="/">EvoEdu</Link></div>
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
      <Content>
        <div className="container">
          <h4>Khóa học {`${course.name}`}</h4>
          <div className="des-course">
            <img alt="idk" src={`${course.image}`} />
            <p style={{fontSize:"24px"}}>{course.description}</p>
          </div>
          <div className="detail-content1">
            <Card className="detail-card" bordered={false} style={{height:"300px", alignItems:"center", justifyContent:"center"}}>
              <TeamOutlined className="detail-icons" />
              <h4 id="card-heading">Đối tượng</h4>
              <p>Những người hiện chưa có kiến thức nền tảng </p>
            </Card>
            <Card className="detail-card" bordered={false} style={{height:"300px"}}>
              <ClockCircleOutlined className="detail-icons" />
              <h4 id="card-heading">Thời gian học</h4>
              <p>{course.courseTime}</p>
            </Card>
            <Card className="detail-card" bordered={false} style={{height:"300px"}}>
              <CalendarOutlined className="detail-icons" />
              <h4 id="card-heading">Số buổi</h4>
              <p>16 buổi</p>
            </Card>
            <Card className="detail-card" bordered={false} style={{height:"300px"}}>
              <CheckOutlined className="detail-icons" />
              <h4 id="card-heading">Số học viên</h4>
              <p>10-15 học viên/ nhóm lớp. Mentor theo dõi sát sao</p>
            </Card>
          </div>
          <div className="detail-content2">
            <Card className="detail-card1" bordered={false}>
              <img
                alt="sthing"
                src="https://resources.mindx.edu.vn/uploads/images/IMG_0047NVL.jpg"
              />
              <h4 id="card-heading">Học thật làm thật</h4>
              <p>
                Trong lớp, học viên sẽ được thực hành thông qua dự án theo nhóm
                và giải tình huống thực tế. Tại MindX, bạn được học lý thuyết và
                áp dụng ngay vào việc làm project xuyên suốt kỳ học. Kết thúc
                khóa học bỏ túi ít nhất 3 sản phẩm thực tiễn cao.{" "}
              </p>
            </Card>
            <Card className="detail-card1" bordered={false}>
              <img
                alt="sthing"
                src="https://resources.mindx.edu.vn/uploads/images/img_0695_optimized.jpg"
              />
              <h4 id="card-heading">Học bài bản</h4>
              <p>
                Học viên được đào tạo theo lộ trình từ bài bản với những kiến
                thức cô đọng, trọng tâm trong thời gian ngắn để phục vụ cho làm
                việc thực tế tại các doanh nghiệp.
              </p>
            </Card>
            <Card className="detail-card1" bordered={false}>
              <img
                alt="sthing"
                src="https://resources.mindx.edu.vn/uploads/images/img_0601_optimized.jpg"
              />
              <h4 id="card-heading">Cam kết việc làm </h4>
              <p>
                Được cam kết đầu ra, hỗ trợ giới thiệu việc làm, gần như 100%
                các bạn sinh viên có khả năng đi làm fulltime có việc ngay sau
                khi tốt nghiệp EvoEdu
              </p>
            </Card>
            <Card className="detail-card1" bordered={false}>
              <img
                alt="sthing"
                src="https://resources.mindx.edu.vn/uploads/images/photo_2022-11-08%2015.14.46.jpeg"
              />
              <h4 id="card-heading">Mở rộng networking </h4>
              <p>
                Học viên được mentor, giảng viên giàu kinh nghiệm thực chiến tại
                các tập đoàn lớn hướng dẫn, đồng hành. Thắc mắc ở đâu, hỏi ngay
                ở đó, sẽ giúp bạn tiến bộ nhanh hơn gấp nhiều lần.
              </p>
            </Card>
          </div>
          <Button className="detail-btn" onClick={handleOpenModal}>
            Đăng Ký Khóa Học
          </Button>
          <EnrollCourse
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleCloseModal={handleCloseModal}
            course={course}
            CourseId={id}
          />
        </div>
      </Content>
      
      </div>
      <Footer className="footer3">
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
            <FacebookOutlined />
          </a>
          <a
            href="https://twitter.com/mindx_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvZ8BKeWtJb-r1FmnYtRGrw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeOutlined />
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
};

export default Detail;
