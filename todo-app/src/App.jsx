// Nhập các component con và hook cần thiết
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState, useEffect } from "react"

function App() {
  // State: danh sách các công việc (todos)
  // Khởi tạo với một công việc mẫu
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])
  // State: tab đang được chọn (ví dụ: 'All', 'Open', 'Completed')
  const [selectedTab, setSelectedTab] = useState('Open')
  // State mới: theo dõi index của công việc đang được chỉnh sửa.
  // Nếu giá trị là null, không có công việc nào đang ở chế độ chỉnh sửa.
  const [editingIndex, setEditingIndex] = useState(null);

  // Hàm thêm một công việc mới
  function handleAddTodo(newTodo) {
    // Tạo danh sách mới bằng cách thêm công việc mới (chưa hoàn thành)
    const newTodoList = [...todos, { input: newTodo, complete: false }] // lấy tất cả giá trị của todos ban đầu và thêm vào 1 công việc mới(newTodo) với trạng thái 'complete' là false
    setTodos(newTodoList) // Cập nhật state
    handleSaveTodos(newTodoList) // Lưu vào localStorage
  }

  // Hàm đánh dấu một công việc là đã hoàn thành
  function handleCompleteTodo(index) {
    let newTodoList = [...todos] // Sao chép danh sách hiện tại
    let completeTodo = todos[index] // Lấy công việc cần cập nhật
    completeTodo['complete'] = true // Đặt trạng thái 'complete' thành true
    newTodoList[index] = completeTodo // Cập nhật công việc trong danh sách mới
    setTodos(newTodoList) // Cập nhật state
    handleSaveTodos(newTodoList) // Lưu vào localStorage
  }

  // Hàm xóa một công việc
  function handleDeleteTodo(index) {
    // Lọc ra công việc cần xóa dựa trên index (giữ các phần tử có index khác với index cần xóa)
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList) // Cập nhật state
    handleSaveTodos(newTodoList) // Lưu vào localStorage
  }

  // Hàm mới: cập nhật nội dung công việc đã sửa
  function handleUpdateTodo(index, updatedText) {
    // Kiểm tra nếu nội dung mới là rỗng sau khi loại bỏ khoảng trắng
    if (updatedText.trim() === '') {
      // Nếu nội dung rỗng, hủy chỉnh sửa để tránh tạo todo rỗng.
      // Có thể thay thế bằng việc xóa todo hoặc hiển thị thông báo lỗi.
      handleCancelEdit(); // Hiện tại, chỉ hủy chỉnh sửa
      return; // Kết thúc hàm sớm
    }
    // Sao chép mảng todos hiện tại để không thay đổi trực tiếp state
    const newTodoList = [...todos];
    newTodoList[index].input = updatedText; // Truy cập vào phần tử todo ở vị trí index, và thay đổi nội dung input thành updatedText.
    // Cập nhật state todos với danh sách mới
    setTodos(newTodoList);
    // Lưu danh sách công việc mới vào localStorage
    handleSaveTodos(newTodoList);
    // Thoát khỏi chế độ chỉnh sửa bằng cách đặt editingIndex về null
    setEditingIndex(null);
  }

  // Hàm mới: bắt đầu chỉnh sửa một công việc
  function handleEditTodo(index) {
    // Đặt editingIndex thành index của công việc cần chỉnh sửa.
    // Điều này sẽ kích hoạt giao diện chỉnh sửa cho TodoCard tương ứng.
    setEditingIndex(index);
  }

  // Hàm mới: hủy bỏ chỉnh sửa
  function handleCancelEdit() {
    // Đặt editingIndex về null để thoát khỏi chế độ chỉnh sửa.
    // Giao diện sẽ quay trở lại hiển thị nội dung công việc bình thường.
    setEditingIndex(null);
  }

  // Hàm lưu danh sách công việc vào localStorage
  function handleSaveTodos(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }))
  }

  // useEffect để tải công việc từ localStorage khi component được mount
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return
    }
    let db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  }, [])

  // Phần JSX để render giao diện
  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}   // Prop mới: hàm cập nhật todo
        handleEditTodo={handleEditTodo}       // Prop mới: hàm bắt đầu chỉnh sửa
        handleCancelEdit={handleCancelEdit}   // Prop mới: hàm hủy chỉnh sửa
        editingIndex={editingIndex}           // Prop mới: state chỉ số todo đang sửa
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}
export default App
