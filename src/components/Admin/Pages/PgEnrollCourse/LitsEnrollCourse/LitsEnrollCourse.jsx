import { React, createContext, useEffect, useState } from "react";
import "./DSDK.css";
import { Table, Space, Button } from "antd";
import Axios from "axios";
import SearchEnrollCourse from "../SearchEnrollCourse/SearchEnrollCourse";
import Pagination from "@mui/material/Pagination";
import momnent from "moment";
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
  const [page, setPage] = useState(0);
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getData();
  }, [page]);
  const handleChangePagination = (event, value) => {
    setPage(value);
  };
  const getData = async () => {
    const { data } = await Axios.get(baseUrlenrollCourse+"?page=" + `${page}`);
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
      width: 150,
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
      title: "Ngày Đăng Ký",
      dataIndex: "createAt",
      key: "createAt",
      width: 150,
      render: (value, record) => (
        <>{momnent(value).add("hours", 7).format("DD-MM-YYYY")}</>
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
        baseUrlenrollCourse,
        Layout,
        setOptions,
        setSearchValue,
        getData,
        setloading,
        setData,
      }}
    >
      <div>
        <SearchEnrollCourse />
        <div>
       
          <Table
            loading={loading}
            className="TableCS"
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={false}
          ></Table>
          <Pagination
            style={{ marginLeft: 920, marginTop: 20, marginBottom: 20 }}
            variant="outlined"
            shape="rounded"
            color="secondary"
            count={10}
            page={page}
            onChange={handleChangePagination}
          />
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default ListEnrollCourse;
