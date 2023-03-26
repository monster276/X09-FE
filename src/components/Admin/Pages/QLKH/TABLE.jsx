import React from 'react';
import { useState, useRef } from "react";
import {
    Space,
    Table,
    Button,
} from "antd";
const { Column } = Table;

const  TABLE = (props) => {
  return (
    <div>
      <Table className="TableCS">
        <Column title="STT" dataIndex="STT" key="STT"  width={50}/>
        <Column
          title="Mã Khóa Học "
          dataIndex="MKhoaHoc"
          key="MKhoaHoc"
          width={150}
        />
        <Column
          title="Tên Khóa Học "
          dataIndex="TKhoaHoc"
          key="TKhoaHoc"
          width={300}
        />
        <Column title="Giá Thành " dataIndex="GThanh" key="GThanh" width={240} />
        <Column title="Sĩ Số Lớp " dataIndex="SSlop" key="SSlop" width={100} />
        <Column
          title="Chức Năng"
          key="action"
          width={300}
          render={(_, record) => (
            <Space size="middle">
              <Button> Chi Tiết </Button>
              <Button> Chỉnh Sửa </Button>
              <Button> Xóa </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default TABLE;
