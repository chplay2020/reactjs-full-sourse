export function TodoCard(props) {
    const { todoIndex, todos } = props
    const todo = todos[todoIndex]
    console.log(todo)
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete}>
                    <h4>Complete</h4>
                </button>
                <button>
                    <h4>Delete</h4>
                </button>
            </div>
        </div>
    )
}