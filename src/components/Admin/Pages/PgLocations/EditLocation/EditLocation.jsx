import React, { useContext } from "react";
import { Button, Modal, Form, Input,Select } from "antd";
import { ListContext } from "../ListLocation/ListLocation";
import Axios from "axios";
const { Item } = Form;

const EditLocation = () => {
  const { postData, showEditlModal, Layout, EditsModalOpen,  setPostData, baseUrlLocations, data, setData} = useContext(ListContext);

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };

  const GetPut = async () => {
    try {
      await Axios.put(baseUrlLocations + "/" + postData._id, postData).then(
        (res) => {
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
          showEditlModal();
        }
      );
    } catch (error) {
      console.error(error.data);
    }
  };

  return (
    <div>
       <Modal
          Key="id"
          visible={EditsModalOpen}
          title="CHỈNH SỬA CỞ SỞ "
          onCancel={showEditlModal}
          centered
          footer={[
            <Button style={{background: "red", color: "white"}} onClick={showEditlModal}>Thoát</Button>,
            <Button style={{background: "blue", color: "white"}} type="primary" onClick={GetPut}>
              Lưu
            </Button>,
          ]}
        >
          <Form {...Layout}>
            <Item label="Mã Cở Sở " key="id">
              <Input
                disabled
                name="id"
                onChange={handeChange}
                placeholder="nhập Mã Cơ Sở"
                value={postData && postData.id}
              />
            </Item>

            <Item label=" Tên Cở Sở" key="name">
              <Input
                disabled
                name="name"
                onChange={handeChange}
                placeholder="nhập Tên Cở Sở"
                value={postData && postData.name}
              />
            </Item>

            <Item label=" Trạng Thái Hoạt Động " key="status">
              <Select
                value={postData && postData.status ? "Hoạt Động" : "Ngừng Hoạt Động"}
                style={{
                  width: 160,
                }}
                onChange={postData => handeChange({ target: { value: postData , name: 'status' } })}
              > 
                 <Select.Option value={true}>Hoạt Động</Select.Option>
                 <Select.Option value={false}>Ngừng Hoạt Động</Select.Option>
              </Select>
            </Item>

            <Item label="Địa Chỉ Cở Sở " key="address">
              <Input.TextArea
                rows={4}
                name="address"
                placeholder="nhập Địa Chỉ Cở Sở"
                onChange={handeChange}
                value={postData && postData.address}
              />
            </Item>
          </Form>
        </Modal>
    </div>
  );
};

export default EditLocation;
