import React, { useContext, useEffect } from "react";
import { Button, Modal, Form, Select } from "antd";
import { ListContext } from "../ListLocation/ListLocation";
import Axios from "axios";
const { Item } = Form;
const { Option } = Select;

const DetailLocation = () => {
  const {
    postData,
    showDetaillModal,
    Layout,
    DetailsModalOpen,
    baseUrlLocations,
    setData,
    data,
  } = useContext(ListContext);

  const GetDetail = async () => {
    try {
      let result = await Axios.get(
        baseUrlLocations + "/" + postData._id,
        postData
      ).then((res) => {
        var dataPut = data;
        dataPut.map((elemento) => {
          if (elemento._id === postData._id) {
            elemento.id = postData.id;
            elemento.name = postData.name;
            elemento.status = postData.status;
            elemento.address = postData.address;
          }
        });
        setData(dataPut);
        showDetaillModal();
        console.log(result);
      });
    } catch (error) {
      console.error(error.data);
    }
    GetDetail();
  };
  return (
    <div>
      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="CHI TIẾT CƠ SỞ"
        onCancel={showDetaillModal}
        centered
        footer={[<Button style={{background: "red", color: "white"}} onClick={showDetaillModal}>Thoát</Button>]}
      >
        <Form {...Layout}>
          <Item label="MÃ CỞ SỞ" key="id">
            <span name="id"  style={{ color: "green" }}> {postData.id} </span>
          </Item>

          <Item label=" TÊN CƠ SỞ" key="name">
            <span name="name"  style={{ color: "green" }} >{postData.name}</span>
          </Item>

          <Item label="TRẠNG THÁI HOẠT ĐỘNG" key="status">
            <span key={true} value={true}  style={{ color: "green" }} >
              {postData.status?'Hoạt Động ':'Ngừng Hoạt Động'}
            </span>
          </Item>

          <Item label="ĐỊA CHỈ CỞ SỞ" key="address">
            <span name="address">{postData.address}</span>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailLocation;
