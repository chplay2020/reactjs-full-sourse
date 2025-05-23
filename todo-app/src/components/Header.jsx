export function Header(props) {
    const { todos } = props // Nhận danh sách todos từ props
    const todosLength = todos.length // Lấy số lượng công việc

    // Kiểm tra xem có nên dùng "task" hay "tasks" (số ít/số nhiều)
    const isTasksPlural = todosLength != 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

    return (
        <header>
            {/* Hiển thị thông báo với số lượng công việc và từ "task/tasks" phù hợp */}
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}
