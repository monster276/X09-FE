import { Button, Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
  },
  {
    title: 'Khóa Học',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Bài Giảng Khóa Học',
    dataIndex: 'courseLecture',
    key: 'courseLecture',
  },
  {
    title: 'Thời Lượng Giảng Dạy',
    dataIndex: 'teachingTime',
    key: 'teachingTime',
  },
  {
    title: 'Số Buổi dạy Học',
    dataIndex: 'numberOfLessons',
    key: 'numberOfLessons',
  },
  {
    title: 'Số Lượng Học Viên',
    dataIndex: 'numberOfParticipants',
    key: 'numberOfParticipants',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='primary'>Chi tiết</Button>
      </Space>
    ),
  },
];
const data = [
  {
    stt: '1',
    course: 'X-Cater', 
    courseLecture: 'Lập trình cơ bản và nâng cao',
    teachingTime: '19h30-22h30',
    numberOfLessons: '18',
    numberOfParticipants: '20',
  },
  {
    stt: '2',
    course: 'DATA ANALYST', 
    courseLecture: 'Lập trình cơ sở dữ liệu và monggoDB',
    teachingTime: '14h-17h',
    numberOfLessons: '20',
    numberOfParticipants: '15',
  },
  {
    stt: '3',
    course: 'BLOCKCHAIN DEVELOPER', 
    courseLecture: 'Lập trình cơ bản về blockchain',
    teachingTime: '19h30-22h30',
    numberOfLessons: '18',
    numberOfParticipants: '20',
  },
  {
    stt: '4',
    course: 'PRODUCT MANAGER', 
    courseLecture: 'Lập trình quản lý dự án phần mềm',
    teachingTime: '14h-17h',
    numberOfLessons: '22',
    numberOfParticipants: '18',
  },

];
export function Lecture() {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
