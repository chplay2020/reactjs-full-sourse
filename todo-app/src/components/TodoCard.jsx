export function TodoCard(props) {
    // Trích xuất các props cần thiết
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props

    return (
        // Sử dụng class 'card' và 'todo-item' từ fanta.css và index.css
        // Thêm class 'todo-complete' nếu công việc đã hoàn thành để làm mờ nó đi
        <div className={`card todo-item ${todo.complete ? 'todo-complete' : ''}`}>
            <p>{todo.input}</p> {/* Hiển thị nội dung công việc */}
            <div className="todo-buttons"> {/* Container cho các nút */}
                <button
                    onClick={() => {
                        handleCompleteTodo(todoIndex) // Gọi hàm hoàn thành công việc với index đã được truyền
                    }}
                    disabled={todo.complete} /* Vô hiệu hóa nút nếu công việc đã hoàn thành */ >
                    <h4>Complete</h4>
                </button>
                <button
                    onClick={() => {
                        handleDeleteTodo(todoIndex) // Gọi hàm xóa công việc với index đã được truyền
                    }}>
                    <h4>Delete</h4>
                </button>
            </div>
        </div>
    )
}
