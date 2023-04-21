import { React, createContext, useEffect, useState } from "react";
import "./Class.css";
import { Table, Space, Button } from "antd";
import Axios from "axios";
import EditClass from "../EditClass/EditClass";
import DetailClass from "../DetailClass/DetailClass";
import DeleteClass from "../DeleteClass/DeleteClass";
import SearchClass from "../Search/SearchClass";
const baseUrlClass = "https://x09-be.onrender.com/api/classrooms";
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
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [deletesModalOpen, setdeletesModalOpen] = useState(false);
  const [EditsModalOpen, setEditModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailModalOpen] = useState(false);
  const [postData, setPostData] = useState({
    _id:"",
    id: "",
    nameclass: "",
    fullname: "",
    location: "",
    course: "",
    startTime: "",
    endTime: "",
    numberOfLessons:"",
    classTime:"",
    schedule:"",
  });
  useEffect(() => {
    getData();
  }, []);

  const showDeletelModal = () => {
    setdeletesModalOpen(!deletesModalOpen);
  };
  const showEditlModal = () => {
    setEditModalOpen(!EditsModalOpen);
  };
  const showDetaillModal = () => {
    setDetailModalOpen(!DetailsModalOpen);
  };
  const SeleArtista = (artista, caso) => {
    setPostData(artista);
    caso === "Editar" ? showEditlModal() : showDeletelModal();
  };
  const SeleDetail = (artistaDetail, casoDetail) => {
    setPostData(artistaDetail);
    casoDetail === "Detail" && showDetaillModal();
  }
  const getData = async () => {
    const { data } = await Axios.get(baseUrlClass);
    setloading(false);
    setData(
      data.classrooms.map((row) => ({
        _id: row._id,
        id: row.id,
        nameclass: row.name,
        location:row.location.name,
        course: row.course.name,
        classTime: row.classTime,
        schedule: row.schedule,
        numberOfLessons: row.numberOfLessons,
        startTime:row.startTime,
        endTime: row.endTime,
        students:row.students.fullName,
        students:row.students.email,
        students:row.students.phoneNumber,
        students:row.students.course,
        students:row.students.status,
        students:row.students.createdAt,
        students:row.students.updatedAt,
      }))
    );
  };
  const columns = [
    {
      title: "Mã Lớp Học",
      dataIndex: "id",
      key: "id",
      width: 150,
    },
    {
      title: "Tên Lớp Học",
      dataIndex: "nameclass",
      key: "nameclass",
      width: 150,
    },
    {
      title: "Tên Giảng Viên",
      dataIndex: "fullname",
      key: "fullname",
      width: 200,
    },
    {
      title: "Địa Chỉ Cơ Sở",
      dataIndex: "location",
      key: "location",
      width: 300,
    },
    {
      title: "Khóa Học ",
      dataIndex: "course",
      key: "course",
      width: 170,
    },
    {
      title: "Chức Năng",
      width: 100,
      render: (fila) => (
        <Space size="middle"> {" "}
          <Button style={{background: "blue", color: "white"}} onClick={() => SeleArtista(fila, "Editar")}> Chỉnh Sửa </Button>
          <Button style={{background: "red", color: "white"}} onClick={() => SeleArtista(fila, "Delete")}> xóa </Button>
          <Button style={{background: "green", color: "white"}} onClick={() => SeleDetail(fila, "Detail")}> Chi Tiết </Button>
        </Space>
      ),
    },
  ];

  return (
    <ListContext.Provider
      value={{
        options,
        searchValue,
        data,
        loading,
        postData,
        baseUrlClass,
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
        <SearchClass/>
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
            <EditClass />
          </div>
          <div>
            <DeleteClass/>
          </div>
          <div>
            <DetailClass/>
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default ListClass;
