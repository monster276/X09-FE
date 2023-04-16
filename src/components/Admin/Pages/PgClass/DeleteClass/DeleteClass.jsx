import React, { useContext } from "react";
import { Button, Modal } from "antd";
import { ListContext } from "../ListClass/ListClass";
import Axios from "axios";
const DeleteClass = () => {
  const { postData,  showDeletelModal, deletesModalOpen, baseUrlClass, data, setData } = useContext(ListContext);

  const HandlDelete = async () => {
    await Axios.delete(baseUrlClass + "/" + postData._id)
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
        title="Xóa Lớp Học"
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

export default DeleteClass;
