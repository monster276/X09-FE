import { Table, Select, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { path } from "../Router/RouterConfig";

const { Option } = Select;

const course = {
  name: "X-Cater",
};
const student = [
  {
    stt: "1",
    studentName: "Hieu Trung Nguyen",
    evaluates: [
      {
        lectureId: "1",
        attendance: "DUNG_GIO",
        point: "9",
        comment: "okokok",
      },
      {
        lectureId: "2",
        attendance: "MUON",
        point: "6",
        comment: "di muon",
      },
      {
        lectureId: "3",
        attendance: "MUON",
        point: "3",
        comment: "di muon",
      },
    ],
  },
  {
    stt: "1",
    studentName: "Nguyen Trung Hieu",
    evaluates: [
      {
        lectureId: "1",
        attendance: "DUNG_GIO",
        point: "10",
        comment: "okokok",
      },
      {
        lectureId: "2",
        attendance: "MUON",
        point: "5",
        comment: "di muon",
      },
      {
        lectureId: "3",
        attendance: "VANG",
        point: "0",
        comment: "vang",
      },
    ],
  },
  {
    stt: "2",
    studentName: "Nguyen Hieu Trung",
    evaluates: [
      {
        lectureId: "1",
        attendance: "DUNG_GIO",
        point: "8",
        comment: "okokok",
      },
      {
        lectureId: "2",
        attendance: "MUON",
        point: "3",
        comment: "di muon",
      },
      {
        lectureId: "3",
        attendance: "MUON",
        point: "1",
        comment: "muon",
      },
    ],
  },
];
const schedule = [
  {
    id: "1",
    date: "01/03/2023",
    lectureId: "1",
    lectureName: "Bài học 1",
  },
  {
    id: "2",
    date: "02/03/2023",
    lectureId: "2",
    lectureName: "Bài học 2",
  },
  {
    id: "3",
    date: "03/03/2023",
    lectureId: "3",
    lectureName: "Bài học 3",
  },
];

export function ClassroomDetail() {
  const studentColumns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Khóa Học",
      dataIndex: "course",
      key: "course",
      render: () => {
        return <span>{course.name}</span>;
      },
    },
    {
      title: "Họ tên",
      dataIndex: "studentName",
      key: "studentName",
    },
  ];
  const scheduleColums = schedule
    .map((s) => {
      return [
        // {
        //   title: s.date + "- Bài học",
        //   dataIndex: s.id,
        //   key: s.id,
        //   render: (text, record) => {
        //     return <span>{s.lectureName}</span>;
        //   },
        // },
        {
          title: s.date + "- Điểm danh",
          dataIndex: s.id,
          key: s.id,
          render: (text, record) => {
            let evaluate = record.evaluates.find(
              (e) => e.lectureId == s.lectureId
            );
            return (
              <Select
                style={{ width: "100%" }}
                defaultValue={evaluate?.attendance}
              >
                <Option value="MUON">Muộn</Option>
                <Option value="DUNG_GIO">Đúng giờ</Option>
                <Option value="VANG">Vắng</Option>
              </Select>
            );
          },
        },
        {
          title: s.date + "- Chấm điểm",
          dataIndex: s.id,
          key: s.id,
          render: (text, record) => {
            let evaluate = record.evaluates.find(
              (e) => e.lectureId == s.lectureId
            );
            return (
              <InputNumber
                style={{ width: "100%" }}
                defaultValue={evaluate?.point}
                min="0"
                max="10"
              />
            );
          },
        },
        {
          title: s.date + "- Nhận xét",
          dataIndex: s.id,
          key: s.id,
          render: (text, record) => {
            let evaluate = record.evaluates.find(
              (e) => e.lectureId == s.lectureId
            );
            return (
              <Input
                style={{ width: "100%" }}
                defaultValue={evaluate?.comment}
              ></Input>
            );
          },
        },
      ];
    })
    .flat(1);
  return (
    <>
      <Table
        columns={[...studentColumns, ...scheduleColums]}
        dataSource={student}
        scroll={{ x: 2000 }}
      
      />
    </>
  );
}
