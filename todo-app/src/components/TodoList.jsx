import { TodoCard } from "./TodoCard" // Nhập component TodoCard

export function TodoList(props) {
    const { todos, selectedTab, handleCompleteTodo, handleDeleteTodo, handleUpdateTodo, handleEditTodo, handleCancelEdit, editingIndex } = props // Nhận todos và selectedTab từ App.jsx, và các hàm xử lý mới
    // Lọc danh sách công việc dựa trên selectedTab
    const filterTodoList = selectedTab === "All" ? todos : // Nếu tab là "All", hiển thị tất cả
        selectedTab === "Completed" ?
            todos.filter(val => val.complete) : // Nếu tab là "Completed", chỉ hiển thị công việc đã hoàn thành
            todos.filter(val => !val.complete); // Mặc định (tab "Open"), chỉ hiển thị công việc chưa hoàn thành

    return (
        <>
            {/* Lặp qua danh sách công việc đã được lọc (filterTodoList) */}
            {filterTodoList.map((todo, index) => { // Sử dụng index của mảng đã lọc cho key tạm thời
                // Tìm index gốc của todo trong mảng todos ban đầu (mảng đầy đủ trong App.jsx)
                // Điều này quan trọng vì các hàm xử lý (complete, delete, update) cần index gốc.
                // So sánh cả 'input' và 'complete' để tăng độ chính xác khi tìm index,
                // phòng trường hợp có các todo với nội dung giống hệt nhau.
                const originalTodoIndex = todos.findIndex(val => val.input === todo.input && val.complete === todo.complete);

                return (
                    <TodoCard
                        // Cập nhật key để đảm bảo tính duy nhất và ổn định hơn,
                        // đặc biệt khi danh sách thay đổi hoặc có các todo giống hệt nhau.
                        // Sử dụng originalTodoIndex và todo.input để tạo key.
                        key={`${originalTodoIndex}-${todo.input}`}
                        todoIndex={originalTodoIndex} // Truyền index gốc
                        todo={todo} // Truyền đối tượng todo hiện tại cho TodoCard
                        handleCompleteTodo={handleCompleteTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        // Truyền các props mới liên quan đến chỉnh sửa xuống TodoCard
                        handleUpdateTodo={handleUpdateTodo}
                        handleEditTodo={handleEditTodo}
                        handleCancelEdit={handleCancelEdit}
                        editingIndex={editingIndex}
                    />
                )
            })}
        </>
    )
}
