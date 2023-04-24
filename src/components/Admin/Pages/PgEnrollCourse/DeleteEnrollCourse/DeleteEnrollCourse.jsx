import React, { useContext } from "react";
import { Button, Modal } from "antd";
import { ListContext } from "../LitsEnrollCourse/LitsEnrollCourse";
import Axios from "axios";
const DeleteEnrollCourse = () => {
  const { postData,  showDeletelModal, deletesModalOpen, baseUrl, data, setData } = useContext(ListContext);

  const HandlDelete = async () => {
    await Axios.delete(baseUrl + "/" + postData._id)
      .then((res) => {
        setData(data.filter((elemento) => elemento._id !== postData._id));
        showDeletelModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Modal
        Key="id"
        visible={deletesModalOpen}
        title="XÓA KHÓA HỌC"
        destroyOnClose={true}
        onCancel={showDeletelModal}
        centered
        footer={[
          <Button style={{background: "red", color: "white"}} onClick={showDeletelModal}>Thoát</Button>,
          <Button style={{background: "blue", color: "white"}}  type="primary" onClick={HandlDelete}>
            Lưu
          </Button>,
        ]}
      >
        bạn có muốn xóa ko <b>{postData && postData.id}</b>?
      </Modal>
    </div>
  );
};

export default DeleteEnrollCourse;
