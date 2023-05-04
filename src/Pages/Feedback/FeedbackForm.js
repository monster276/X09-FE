import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import axios from 'axios'
import { toast } from 'react-toastify'

const FeedbackForm = () => {
  const [page, setPage] = useState(1)
  const baseUrlClassroom = 'http://localhost:5000/api/classrooms'
  const [dataBack, setdataBack] = useState([])
  const [suggest, setSuggest] = useState([])
  const [teacher, setTeacher] = useState('')
  const [teacherknowledge, setTeacherknowledge] = useState('')
  const [followup, setFollowup] = useState('')
  const [courseknowledge, setCourseknowledge] = useState('')
  const [doucument, setDoucument] = useState('')
  const [another, setAnother] = useState('')
  const [fullName, setfullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [classInfo, setClassInfo] = useState({
    user: '',
    course: '',
    classroom: '',
  })
  const [text, setText] = useState('')
  const getData = async () => {
    const { data } = await Axios.get(baseUrlClassroom)
    setdataBack(data.classrooms)
  }
  useEffect(() => {
    getData()
  }, [page])
  console.log(dataBack)
  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = dataBack.filter((classroom) => {
        const regex = new RegExp(`${text}`, 'gi')
        return classroom.name.match(regex)
      })
    }
    setTeacher('')
    setSuggest(matches)
    setText(text)
  }
  const onClickSuggest = (text) => {
    setText(text)
    setSuggest([])
    let classroomId = dataBack.find((item) => item.name === text)
    setTeacher(classroomId.user.fullName)
    setClassInfo({
      ...classInfo,
      user: classroomId.user._id,
      course: classroomId.course._id,
      classroom: classroomId._id,
    })
  }
  const submitFeedBack = async (e) => {
    e.preventDefault()
    const dataSend = {
      name: fullName,
      email: email,
      phoneNumber: phoneNumber,
      classroom: classInfo.classroom,
      teacherFeedback: {
        user: classInfo.user,
        teacherknowledge: teacherknowledge,
        followUp: followup,
      },
      courseFeedback: {
        course: classInfo.course,
        Courseknowledge: courseknowledge,
        documentCourse: doucument,
      },
      anotherFeedback: another,
    }
    try {
      await axios
        .post('http://localhost:5000/api/feedback/recive', dataSend)
        .then((result) => {
          console.log(result.data)
          toast.success('Cảm ơn những đóng góp quý báu của bạn')
        })
    } catch (error) {
      toast.error('Có vẻ như đã có lỗi xảy ra')
    }
  }
  return (
    <div className="flex items-center justify-center p-12 h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="mx-auto w-full max-w-[750px] bg-white p-4 rounded-lg h-[100%]">
        <form onSubmit={submitFeedBack}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Họ tên
                </label>
                <input
                  onChange={(e) => setfullName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Họ tên của bạn"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email của bạn"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="guest"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Số điện thoại
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="number"
              name="phoneNumber"
              id="guest"
              placeholder="Số điện thoại của bạn"
              min={0}
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Mã lớp học
                </label>
                <input
                  type="text"
                  name="classrooms"
                  id="classrooms"
                  placeholder="Mã lớp học của bạn, VD: C4E-1"
                  onChange={(e) => onChangeHandler(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={text}
                />
                {suggest &&
                  suggest.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 border-b-4 rounded-md  "
                    >
                      <span
                        className="cursor-pointer ml-6 mt-5 columns-md-12  w-full "
                        onClick={() => onClickSuggest(item.name)}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Tên giảng viên
                </label>
                <input
                  value={teacher}
                  type="text"
                  name="teacher"
                  id="teacher"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className=" flex-row ml-5 sm:w-1/2">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Kiến thức giảng viên có đáp ứng việc dạy không?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                    value="Đạt"
                    onChange={(e) => setTeacherknowledge(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Đạt
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    className="h-5 w-5"
                    value="Tuyệt vời"
                    onChange={(e) => setTeacherknowledge(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Tuyệt vời
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton3"
                    className="h-5 w-5"
                    value="Chưa đạt"
                    onChange={(e) => setTeacherknowledge(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Chưa đạt
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Giảng viên có hỗ trợ nhiệt tình không?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio2"
                    id="radioButton2"
                    className="h-5 w-5"
                    value="Đạt"
                    onChange={(e) => setFollowup(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Đạt
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio2"
                    id="radioButton2"
                    className="h-5 w-5"
                    value="Tuyệt vời"
                    onChange={(e) => setFollowup(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Tuyệt vời
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio2"
                    id="radioButton2"
                    className="h-5 w-5"
                    value="Chưa đạt"
                    onChange={(e) => setFollowup(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Chưa đạt
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Kiến thức khoá học có đảm bảo không?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio3"
                    id="radioButton3"
                    className="h-5 w-5"
                    value="Đạt"
                    onChange={(e) => setCourseknowledge(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Đạt
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio3"
                    id="radioButton3"
                    className="h-5 w-5"
                    value="Tuyệt vời"
                    onChange={(e) => setCourseknowledge(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Tuyệt vời
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio3"
                    id="radioButton3"
                    className="h-5 w-5"
                    value="Chưa đạt"
                    onChange={(e) => setCourseknowledge(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Chưa đạt
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Tài liệu học có dễ sử dụng không?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio4"
                    id="radioButton4"
                    className="h-5 w-5"
                    onChange={(e) => setDoucument(e.target.value)}
                    value="Đạt"
                  />
                  <label
                    htmlFor="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Đạt
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio4"
                    id="radioButton4"
                    className="h-5 w-5"
                    value="Tuyệt vời"
                    onChange={(e) => setDoucument(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Tuyệt vời
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio4"
                    id="radioButton4"
                    className="h-5 w-5"
                    value="Chưa đạt"
                    onChange={(e) => setDoucument(e.target.value)}
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Chưa đạt
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="guest"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Góp ý thêm cho chúng tôi
            </label>
            <textarea
              onChange={(e) => setAnother(e.target.value)}
              type="textarea"
              name="phoneNumber"
              id="guest"
              placeholder="Viết tin nhắn của bạn"
              min={0}
              className="w-full h-[60] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedbackForm
