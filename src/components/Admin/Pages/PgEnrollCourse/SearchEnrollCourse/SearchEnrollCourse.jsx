import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./SearchEnrollCourse.css";
import { SreachDeBounce } from "../../hooks"
import { ListContext } from "../LitsEnrollCourse/LitsEnrollCourse";
import { Space, Button, Input, AutoComplete, Modal, Form,message  } from "antd";
const { Search } = Input;

const SearchEnrollCourse = () => {
  const {
    setloading,
    setData,
    options,
    searchValue,
    setOptions,
    setSearchValue,
  } = useContext(ListContext);

  const debounced = SreachDeBounce(searchValue , 700)

  useEffect(() => {
    getSearchData();
  }, [debounced]);

  
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText)];
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const getSearchData = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/enrollCourse?keyword=${debounced}`
    );
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
  return(
    <div>
      <div className="SpaceandButton">
        <Space direction="vertical">
          <AutoComplete
            style={{
              height: 10,
              width: 460,
            }}
            onSearch={(text) => setOptions(getPanelValue(text))}
            options={options}
            onSelect={onSelect}
          >
            <Search
              
              size="large"
              placeholder="nhập tìm kiếm"
              enterButton="Tìm Kiếm"
              onChange={(e) => setSearchValue(e.target.value)}
              value={debounced}
            />
          </AutoComplete>
        </Space>
      </div>
    </div>
  );
};

export default SearchEnrollCourse;