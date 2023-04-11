import React, { useContext } from "react";
import { Button, Modal } from "antd";
import { ListContext } from "../ListCourse/ListCourse";
import Axios from "axios";
const DeleteCourse = () => {
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
        title="Tạo Mới Khóa Học"
        destroyOnClose={true}
        onCancel={showDeletelModal}
        centered
        footer={[
          <Button onClick={showDeletelModal}>Thoát</Button>,
          <Button type="primary" onClick={HandlDelete}>
            Lưu
          </Button>,
        ]}
      >
        bạn có muốn xóa ko <b>{postData && postData.id}</b>?
      </Modal>
    </div>
  );
};

export default DeleteCourse;
