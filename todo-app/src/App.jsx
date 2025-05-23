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

  // Hàm thêm một công việc mới
  function handleAddTodo(newTodo) {
    // Tạo danh sách mới bằng cách thêm công việc mới (chưa hoàn thành)
    const newTodoList = [...todos, { input: newTodo, complete: false }]
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
    // Lọc ra công việc cần xóa dựa trên index
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList) // Cập nhật state
    handleSaveTodos(newTodoList) // Lưu vào localStorage
  }

  // Hàm lưu danh sách công việc vào localStorage
  function handleSaveTodos(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }))
  }

  // useEffect để tải công việc từ localStorage khi component được mount
  // và có thể để lưu khi todos thay đổi (cần cẩn thận với dependency array)
  useEffect(() => {
    // Kiểm tra xem localStorage có tồn tại và có dữ liệu không
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return
    }
    console.log("here") // Dòng này có thể để debug
    let db = JSON.parse(localStorage.getItem("todo-app")) // Lấy và parse dữ liệu
    setTodos(db.todos) // Cập nhật state với dữ liệu từ localStorage
  }, []) // Mảng dependency rỗng `[]` nghĩa là effect này chỉ chạy một lần sau khi component mount

  // Phần JSX để render giao diện
  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}
export default App
