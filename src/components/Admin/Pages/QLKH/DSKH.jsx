import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./DSKH.css";
import { Table, Space, Button } from "antd";

function DSKH() {

  const [state, setstate] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("https://x09-be.onrender.com/api/courses").then(
      res => {
        setloading(false);
        setstate(
          res.data.map(row => ({
            name: row.name,
            message: row.description,
            price: row.price,
            id: row.id,
          }))
        );
      }
    );
  };

  const columns = [
        {
          title: "Mã Khóa Học",
          dataIndex: "id",
          key:"id",
          width: 100,
        },
        {
          title: "Tên Khóa Học",
          dataIndex: "name",
          key:"name",
          width: 200,
        },
        {
          title: "Mô Tả Khóa Học",
          dataIndex: "message",
          key:"message",
          width: 400,
        },
        {
          title: "Giá Thành ",
          dataIndex: "price",
          key:"price",
          width: 100,
        },
        {
          title: "Chức Năng",
          width: 250,
          render: (_, record) => (
            <Space size="middle">
              <Button> Chi Tiết </Button>
              <Button> Chỉnh sửa </Button>
              <Button> Delete </Button>
            </Space>
          ),
        },
      ];

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Table
          className="TableCS"
          columns={columns}
          dataSource={state}
        />
      )}
    </div>
  );
}



export default DSKH;
