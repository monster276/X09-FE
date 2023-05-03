import React, { useContext, useEffect } from "react";
import "./Courses.css";
import { Layout, Menu, Button } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import CourseContext from "../Context/course/CourseContext";
import Loading from "../../loading/Loading";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const Courses = () => {
  const courseContext = useContext(CourseContext);
  const { getCourses, courses, loading } = courseContext;

  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

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
      <Content>
        <h1 className="title-course">Danh sách khóa học</h1>
        <div className="contents3">
          {!loading ? (
            courses.map((course) => (
              <Card
                key={course._id}
                className="card5"
                hoverable
                cover={
                  <Link to={`/detail/${course._id}`}>
                    <img alt="example" src={course.image} />
                  </Link>
                }
              >
                <Meta
                  title={course.name}
                  description={formatter.format(course.price)}
                />
              </Card>
            ))
          ) : (
            <div
              style={{
                color: "#000",
                marginTop: "344px",
                marginLeft: "600px",
                fontSize: "24px",
              }}
            >
              Loading...
            </div>
          )}
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

export default Courses;
