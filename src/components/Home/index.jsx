import React, { useContext, useEffect } from "react";
import "./index.css";
import landing from '../../images/landing2.jpg'
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
import CourseContext from "./Context/course/CourseContext";
import Loader from "../loading/Loader";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

export default function Index(props) {
  const courseContext = useContext(CourseContext);
  const { getNewCourses, courses, dispatch, loading } = courseContext;

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    getNewCourses();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
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
      <Content className="body">
        <div className="banner">
          <img src={landing} alt="" />
          <h1>
            WITH EVOEDU, WE CAN DO IT.
          </h1>
          <p>
            EvoEdu là trang web đào tạo lập trình chuyên nghiệp với chương trình
            đào tạo đa dạng và phong phú. Các giảng viên của chúng tôi là các
            chuyên gia lập trình có kinh nghiệm lâu năm trong ngành và luôn cập
            nhật những kiến thức mới nhất. Trang web của chúng tôi dành cho tất
            cả các đối tượng học viên, từ người mới bắt đầu đến những người muốn
            nâng cao kỹ năng của mình.
          </p>
          <button>KHOÁ HỌC</button>
        </div>
        <h5 id="content-path">TỰ TIN CÙNG CÁC LỘ TRÌNH HỌC</h5>
        <div className="path">
          <Card className="path-card1">
            <SmileOutlined style={{ fontSize: "22px", margin: "15px" }} />
            <Title level={3}>Trẻ em</Title>
            <Paragraph style={{ fontSize: "19px" }}>
              Độ tuổi từ 9 đến 15 tuổi
            </Paragraph>
          </Card>
          <Card className="path-card2">
            <UserOutlined style={{ fontSize: "22px",margin: "15px" }} />
            <Title level={3}>Thanh thiếu niên</Title>
            <Paragraph style={{ fontSize: "19px" }}>
              Độ tuổi từ 15 đến 18 tuổi
            </Paragraph>
          </Card>
          <Card className="path-card3">
            <UserSwitchOutlined style={{ fontSize: "22px",margin: "15px" }} />
            <Title level={3}>Người lớn</Title>
            <Paragraph style={{ fontSize: "19px" }}>
              Độ tuổi từ sinh viên đến đi làm
            </Paragraph>
          </Card>
        </div>
        <h5 id="content-path">CÁC KHOÁ HỌC CỦA CHÚNG TÔI</h5>
        <div className="spec">
          <div className="course1">
            {!loading ? (
              courses.map((course) => (
                <Card
                  key={course._id}
                  className="card5"
                  hoverable
                  cover={
                    <Link to={`/detail/${course._id}`}>
                      <img alt="example" src={course.image} className="courseImg" />
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
                  margin: "126px auto 0",
                  fontSize: "24px",
                }}
              >
                <Loader />
              </div>
            )}
          </div>
          {!loading && (
            <Button className="landing-btn" style={{ fontSize: "22px", background: "#1781c7", width: "400px", fontWeight: "600", color:"white" }}>
              <Link to="/course">Khám phá các khóa học ở đây</Link>
            </Button>
          )}
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
