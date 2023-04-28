import React,{ useEffect, useState } from "react";
import { Button, Space, Table, Row, Col } from "antd";
import Search from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";
import { link } from "../Router/RouterConfig";
import * as _unitOfWork from "../api";

export function FacilityManagement() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchLocations()
  }, []);
  const navigate = useNavigate();

  const fetchLocations = async () => {
    let res = await _unitOfWork.getAllLocation();
    if (res) {
        setLocations(res.locations.map((item,index) =>({...item,stt:index + 1})))
    }
  };

  const handleDelete = async (value) => {
    let res = await _unitOfWork.deleteASingleLocation(value);
    if (res) {
      fetchLocations()
    }
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên cơ sở",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã cơ sở",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Trạng thái hoạt đông",
      dataIndex: "status",
      key: "status",
      render: (text, record) => ( <span>{record.status ? "Mở cửa" : "Đóng cửa"}</span> )
    },
    {
      title: "Địa Chỉ Cơ Sở",
      dataIndex: "address",
      key: "address",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (text, record) => (
    //     <Space size="middle">
    //         <Button  onClick={() => navigate(link.viewFacility + "/" + record._id)}>
    //         Chi tiết
    //       </Button>
    //       <Button type="primary" onClick={() => navigate(link.updateFacility + "/" + record._id)}>
    //         Cập nhật
    //       </Button>
    //       <Button danger type="primary" onClick={() => handleDelete(record._id)}>
    //         Xóa
    //       </Button>
    //     </Space>
    //   ),
    // },
  ];
  return (
    <>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={12}>
          <Search placeholder="Tìm kiếm"></Search>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={() => navigate(link.createFacility)}>
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={locations} bordered />
    </>
  );
}
