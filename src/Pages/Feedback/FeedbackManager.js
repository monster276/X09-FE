import React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'antd'
import axios from 'axios'

const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const FeedbackManager = () => {
  const [feedback, setFeedback] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    document.title = 'Feedback Manage'
    getData()
  }, [page])
  const getData = async () => {
    const { data } = await axios.get('https://x09-be.onrender.com/api/feedback/')
    
    setFeedback(
      data.data.map((row) => ({
        _id: row._id,
        name: row.name,
        email: row.email,
        classroom: row.classroom.name,
        phoneNumber: row.phoneNumber,
        user: row.teacherFeedback.user.fullName,
        teacherknowledge: row.teacherFeedback.teacherknowledge,
        followUp: row.teacherFeedback.followUp,
        Courseknowledge: row.courseFeedback.Courseknowledge,
        documentCourse: row.courseFeedback.documentCourse,
        another: row.anotherFeedback,
      })),
    )
  }
  const colums = [
    { title: 'Học viên', dataIndex: 'name', key: 'name', width: 150 },
    { title: 'Email', dataIndex: 'email', key: 'email', width: 150 },
    { title: 'SĐT', dataIndex: 'phoneNumber', key: 'phoneNumber', width: 150 },
    { title: 'Giảng viên', dataIndex: 'user', key: 'user', width: 150 },
    { title: 'Lớp', dataIndex: 'classroom', key: 'classroom', width: 150 },
    {
      title: 'Kiến thức giảng viên',
      dataIndex: 'teacherknowledge',
      key: 'teacherknowledge',
      width: 150,
    },
    {
      title: 'Support học viên',
      dataIndex: 'followUp',
      key: 'followUp',
      width: 150,
    },
    {
      title: 'Kiến thức khoá học',
      dataIndex: 'Courseknowledge',
      key: 'Courseknowledge',
      width: 150,
    },
    {
      title: 'Tài liệu khoá học',
      dataIndex: 'documentCourse',
      key: 'documentCourse',
      width: 150,
    },
    { title: 'Góp ý khác', dataIndex: 'another', key: 'another', width: 150 },
  ]
  console.log(feedback)
  return (
    <div>
      <Table
        className="TableCS"
        columns={colums}
        dataSource={feedback}
        rowKey="id"
      ></Table>
    </div>
  )
}

export default FeedbackManager
