import { React, createContext, useEffect, useState } from "react";
import "./DSDK.css";
import { Table, Space, Button } from "antd";
import Axios from "axios";
import EditEnrollCourse from "../EditEnrollCourse/EditEnrollCourse";
import DetailEnrollCourse from "../DetailEnrollCourse/DetailEnrollCourse";
import DeleteEnrollCourse from "../DeleteEnrollCourse/DeleteEnrollCourse";
import SearchEnrollCourse from "../SearchEnrollCourse/SearchEnrollCourse";
const baseUrlenrollCourse = "https://x09-be.onrender.com/api/enrollCourse";
const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const ListContext = createContext();
const ListEnrollCourse = () => {
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
    name: "",
    description: "",
    image: "",
    courseTime: "",
    classTime: "",
    price: "",
    maxNumberOfStudents: "",
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
    const { data } = await Axios.get(baseUrlenrollCourse);
    setloading(false);
    setData(
      data.enrollCourses.map((row) => ({
        _id: row._id,
        email: row.email,
        fullName: row.fullName,
        location: row.location.name,
        phoneNumber: row.phoneNumber,
        course: row.course.name,
        status: row.status,
        createAt: row.createAt,
      }))
    );
  };
 
  const columns = [
    {
      title: "Tên Khóa Học",
      dataIndex: "course",
      key: "course",
      width: 150,
    },
    {
      title: "Tên Người Đăng Ký ",
      dataIndex: "fullName",
      key: "fullName",
      width: 200,
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 600,
    },
    {
      title: "Cở Sở",
      dataIndex: "location",
      key: "location",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
    },
    {
      title: "Chức Năng",
      width: 100,
      render: (fila) => (
        <Space size="middle"> {" "}
          <Button style={{background: "blue", color: "white"}} onClick={() => SeleArtista(fila, "Editar")}> Chỉnh Sửa </Button>
          <Button style={{background: "red", color: "white"}}  onClick={() => SeleArtista(fila, "Delete")}> xóa </Button>
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
        baseUrlenrollCourse,
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
        <SearchEnrollCourse />
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
            <EditEnrollCourse />
          </div>
          <div>
            <DeleteEnrollCourse />
          </div>
          <div>
            <DetailEnrollCourse />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default ListEnrollCourse;
