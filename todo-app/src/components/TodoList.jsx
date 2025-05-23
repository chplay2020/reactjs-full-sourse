import { TodoCard } from "./TodoCard" // Nhập component TodoCard

export function TodoList(props) {
    const { todos, selectedTab } = props // Nhận todos và selectedTab từ App.jsx

    // Lọc danh sách công việc dựa trên selectedTab
    const filterTodoList = selectedTab === "All" ? todos : // Nếu tab là "All", hiển thị tất cả
        selectedTab === "Completed" ?
            todos.filter(val => val.complete) : // Nếu tab là "Completed", chỉ hiển thị công việc đã hoàn thành
            todos.filter(val => !val.complete); // Mặc định (tab "Open"), chỉ hiển thị công việc chưa hoàn thành

    return (
        <>
            {/* Lặp qua danh sách công việc đã được lọc (filterTodoList) */}
            {filterTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex} // Key cho React
                        // Tìm index gốc của todo trong mảng todos ban đầu
                        // Điều này quan trọng để đảm bảo handleCompleteTodo và handleDeleteTodo hoạt động đúng
                        // trên mảng todos gốc trong App.jsx
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props} // Truyền tất cả các props còn lại (bao gồm handleCompleteTodo, handleDeleteTodo)
                        todo={todo} // Truyền đối tượng todo hiện tại cho TodoCard
                    />
                )
            })}
        </>
    )
}
