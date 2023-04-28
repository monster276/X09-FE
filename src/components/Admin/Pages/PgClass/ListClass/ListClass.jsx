import { React, createContext, useEffect, useState } from "react";
import "./Class.css";
import { Table, Space, Button } from "antd";
import Axios from "axios";
import EditClass from "../EditClass/EditClass";
import DetailClass from "../DetailClass/DetailClass";
import DeleteClass from "../DeleteClass/DeleteClass";
import SearchClass from "../Search/SearchClass";
import * as _unitOfWork from "../api";
import momnent from "moment";

const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
export const ListContext = createContext();
const ListClass = () => {
  const [classId, setClassId] = useState(null);
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [deletesModalOpen, setdeletesModalOpen] = useState(false);
  const [EditsModalOpen, setEditModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailModalOpen] = useState(false);
  const [postData, setPostData] = useState({
    _id: "",
    id: "",
    course: "",
    location: "",
    nameclass: "",
    startTime: "",
    endTime: "",
    numberOfLessons: "",
    classTime: "",
    schedule: "",
  });
  useEffect(() => {
    getData();
  }, []);

  const showDeletelModal = () => {
    setdeletesModalOpen(!deletesModalOpen);
  };
  const showEditlModal = (value) => {
    if(!EditsModalOpen)
      setClassId(value._id);
    else
      getData()
    setEditModalOpen(!EditsModalOpen);
  };
  const showDetaillModal = (value) => {
    // if(!DetailsModalOpen)
    // setClassId(value._id);
    // setDetailModalOpen(!DetailsModalOpen);
    if(!DetailsModalOpen)
      setClassId(value._id);
    else
    setEditModalOpen(!DetailsModalOpen);
  };
  const SeleArtista = (artista, caso, value) => {
    setPostData(artista);
    caso === "Editar" ? showEditlModal(value) : showDeletelModal();
  };
  const SeleDetail = (artistaDetail, casoDetail) => {
    setPostData(artistaDetail);
    casoDetail === "Detail" && showDetaillModal();
  };

  const getData = async () => {
    let res = await _unitOfWork.getAllClassroom();
    if (res) setData(res.classrooms.map((c, i) => ({ ...c, stt: i + 1 })));
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Mã Lớp",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Lớp",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giảng viên",
      dataIndex: "user",
      key: "user",
      render: (_, record) => <>{record.user?.fullName}</>,
    },
    {
      title: "Khóa Học",
      dataIndex: "course",
      key: "course",
      render: (value, record) => <>{record.course?.name}</>,
    },
    {
      title: "Cơ sở",
      dataIndex: "location",
      key: "location",
      render: (value, record) => <>{record.location?.name}</>,
    },

    {
      title: "Ngày bắt đầu",
      dataIndex: "startTime",
      key: "startTime",
      render: (value, record) => (
        <>{momnent(value).add("hours", 7).format("DD-MM-YYYY")}</>
      ),
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endTime",
      key: "endTime",
      render: (value, record) => (
        <>{momnent(value).add("hours", 7).format("DD-MM-YYYY")}</>
      ),
    },
    {
      title: "Số buổi học",
      dataIndex: "numberOfLessons",
      key: "numberOfLessons",
    },
    {
      title: "Giờ học",
      dataIndex: "classTime",
      key: "classTime",
    },
    {
      title: "Lịch Học",
      dataIndex: "schedule",
      key: "schedule",
      render: (value, record) => <>{value.join(",")}</>,
    },

    {
      title: "Chức Năng",
      width: 100,
      render: (fila, record) => (
        <Space size="middle">
          {" "}
          <Button
            style={{ background: "blue", color: "white" }}
            onClick={() => SeleArtista(fila, "Editar", record)}
          >
            {" "}
            Chỉnh Sửa{" "}
          </Button>
          {/* <Button style={{background: "red", color: "white"}} onClick={() => SeleArtista(fila, "Delete")}> xóa </Button> */}
          <Button
            style={{ background: "green", color: "white" }}
            onClick={() => SeleDetail(fila, "Detail")}
          >
            {" "}
            Chi Tiết{" "}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ListContext.Provider
        value={{
          options,
          searchValue,
          data,
          loading,
          postData,
          deletesModalOpen,
          DetailsModalOpen,
          Layout,
          EditsModalOpen,
          setOptions,
          setSearchValue,
          getData,
          setloading,
          setData,
          setPostData,
          showDeletelModal,
          showDetaillModal,
          showEditlModal,
        }}
      >
        <div>
          <SearchClass />
          <div>
            {loading ? (
              "Loading"
            ) : (
              <Table
                className="TableCS"
                columns={columns}
                dataSource={data}
                rowKey="id"
              ></Table>
            )}
            <div>
              <EditClass classId={classId} />
            </div>
            <div>{/* <DeleteClass/> */}</div>
            <div>
              <DetailClass classId={classId} />
            </div>
          </div>
        </div>
      </ListContext.Provider>
    </>
  );
};

export default ListClass;
