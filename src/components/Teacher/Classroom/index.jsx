import { Button, Space, Table, Tag } from 'antd';
import { useNavigate } from "react-router-dom";
import { link, path } from '../Router/RouterConfig';


const data = [
  {
    stt: '1',
    course: 'X-Cater', 
    classCode: 'X-01',
    address: '112 trần phú ,hà đông, hà nội',
    schedule: 'thứ2 và thứ6',
  },
  {
    stt: '2',
    course: 'DATA ANALYST', 
    classCode: 'DATA-01',
    address: '260 đường láng, đống đa, hà nội',
    schedule: 'thứ3 và thứ5',
  },
  {
    stt: '3',
    course: 'BLOCKCHAIN DEVELOPER', 
    classCode: 'BLD-01',
    address: '160 hoàng hoa thám, tây hồ, hà nội',
    schedule: 'thứ2 và thứ6',
  },
  {
    stt: '4',
    course: 'PRODUCT MANAGER', 
    classCode: 'PDM-01',
    address: '54 phạm hồng thái, ba đình, hà nội',
    schedule: 'thứ3 và thứ5',
  },

];
export function Classroom() {
  const navigate = useNavigate();
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
      title: 'Mã Lớp',
      dataIndex: 'classCode',
      key: 'classCode',
    },
    {
      title: 'Địa Chỉ Cơ Sở',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Lịch Học',
      dataIndex: 'schedule',
      key: 'schedule',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type='primary'onClick = {() => navigate(link.classroomDetail)} >Chi tiết</Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} bordered />
    </>
  );
}

