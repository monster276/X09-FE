import React, { useContext,  } from "react";
import { Button, Modal,  Form } from "antd";
import Axios from "axios";
import { ListContext } from "../ListUsres/ListUsres";
const { Item } = Form;


const DetailUsers= () => {
   const { data,setData, postData, showDetaillModal, Layout, DetailsModalOpen,baseUrlUsers } = useContext(ListContext);
   const GetDetail = async () => {
    try {
      let result = await Axios.get(baseUrlUsers + "/" + postData._id, postData,
      {
        headers: {
          token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
        },
      }).then(
        (res) => {
          var dataPut = data;
          dataPut.map((elemento) => {
            if (elemento._id === postData._id) {
              elemento.fullName = postData.fullName;
              elemento.email = postData.email;
              elemento.username = postData.username;
              elemento.password = postData.password;
              elemento.phoneNumber = postData.phoneNumber;
            }
          });
          setData(dataPut);
          showDetaillModal();
          console.log(result);
        }
      );
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
        title="CHI TIẾT NGƯỜI DÙNG"
        onCancel={showDetaillModal}
        centered
        footer={[<Button style={{background: "red", color: "white"}} onClick={showDetaillModal}>Thoát</Button>]}
      >
        <Form {...Layout}>
          <Item label="HỌ VÀ TÊN">
            <span name="fullName"  style={{ color: "green" }} > { postData.fullName} </span>
          </Item>

          <Item label="EMAIL">
            <span name="email"  style={{ color: "green" }} >{ postData.email}</span>
          </Item>

          <Item label="TÊN ĐĂNG NHẬP" >
            <span name="username" style={{ color: "green" }}>{postData.username} </span>
          </Item>

          <Item label="SỐ ĐIỆN THOẠI"  style={{ color: "green" }} >
            <span
              name="phoneNumber"
            >
              { postData.phoneNumber}
            </span>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailUsers;
