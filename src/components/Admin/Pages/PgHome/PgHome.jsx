import React, { useState, useRef } from "react";
import { Image } from "antd";
import "./home.css";
import logo from "../../../../img/xinchao.jpg";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Card, Space, Row, Col } from "antd";
const { Meta } = Card;
const Homepage = () => {
  const [PlayTime, setPlayTime] = useState(0);
  const handleProgress = (state) => {
    setPlayTime(state.playedSeconds);
  };
  const playerRef = useRef(null);
  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = ("0" + date.getUTCSeconds()).slice(-2);
    if (hour) {
      return `${hour}:${("0" + minute).slice(-2)}:${second}`;
    }
    return `${minute}:${second}`;
  };
  return (
    <div className="main-container" style={{margin: "0 auto"}}>
      <Row>
        <Col style={{ marginLeft: 42 }} span={6}>
          <Link to="/">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/342503330_537680445237945_3652245650988035277_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qtP7gr29UXcAX-BaC_z&_nc_ht=scontent.fhan17-1.fna&oh=03_AdTeDT_K0FnsI-1cHNIMaNmbInztfZ3J4vIhyrWetQEQbw&oe=647AF574"
                />
              }
            >
              <Meta title="Trang Chủ" description="http://localhost:3000" />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/course">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/342721801_6061368120644919_8710098322137571802_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6y721HvDceoAX8AWavb&_nc_ht=scontent.fhan17-1.fna&oh=03_AdS8aEJFmVihw-g78PSyYLv5AldSu5j5tYnpsGGjXWIAbg&oe=647AEE64"
                />
              }
            >
              <Meta
                title="Trang Danh Sách Khóa Học"
                description="http://localhost:3000/course"
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/teacher">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/343627287_1160984764596076_1694927933978707125_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cKnH9w2LH0EAX8UVjkG&_nc_ht=scontent.fhan17-1.fna&oh=03_AdQfATnmkw_3y25wcQNe6W0dllEtrN1GSGz7ALtcCk-xSg&oe=647AF82E"
                />
              }
            >
              <Meta
                title="Trang Giảng VIên "
                description="http://localhost:3000/teacher"
              />
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/admin">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/343627287_1160984764596076_1694927933978707125_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cKnH9w2LH0EAX8UVjkG&_nc_ht=scontent.fhan17-1.fna&oh=03_AdQfATnmkw_3y25wcQNe6W0dllEtrN1GSGz7ALtcCk-xSg&oe=647AF82E"
                />
              }
            >
              <Meta
                title="Trang Quản Lý"
                description="http://localhost:3000/admin"
              />
            </Card>
          </Link>
        </Col>
      </Row>
      <div
        style={{
          marginTop: 40,
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=AZ0ja83nMVc"
          width="1240px"
          height="660px"
          playing={true}
          controls={false}
        />
      </div>
    </div>
  );
};

//<Image className="logo" height={950} width={1300} src={logo} />;
export default Homepage;
