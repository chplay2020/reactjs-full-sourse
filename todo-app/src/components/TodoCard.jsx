import { useState, useEffect } from 'react';

export function TodoCard(props) {
    // Trích xuất các props cần thiết, bao gồm cả các props mới cho việc chỉnh sửa
    const {
        todo,
        handleDeleteTodo,
        todoIndex,
        handleCompleteTodo,
        handleUpdateTodo,
        handleEditTodo,
        handleCancelEdit,
        editingIndex
    } = props;

    // State cục bộ để lưu trữ văn bản đang được chỉnh sửa
    const [editText, setEditText] = useState(todo.input);

    // Kiểm tra xem công việc này có đang được chỉnh sửa không
    const isEditing = editingIndex === todoIndex;

    // Cập nhật editText nếu todo.input thay đổi (ví dụ: khi hủy chỉnh sửa)
    useEffect(() => {
        setEditText(todo.input);
    }, [todo.input]);

    const onSave = () => {
        if (editText.trim() === '') {
            // Ngăn không cho lưu todo rỗng, có thể xóa hoặc thông báo lỗi
            handleDeleteTodo(todoIndex); // Ví dụ: Xóa nếu rỗng
        } else {
            handleUpdateTodo(todoIndex, editText);
        }
    };

    const onCancel = () => {
        setEditText(todo.input); // Reset lại text về giá trị ban đầu
        handleCancelEdit();
    };
    return (
        <div className={`card todo-item ${todo.complete ? 'todo-complete' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onSave();
                        } else if (e.key === 'Escape') {
                            onCancel();
                        }
                    }}
                />
            ) : (
                <p>{todo.input}</p>
            )}

            <div className="todo-buttons">
                {isEditing ? (
                    <>
                        <button onClick={onSave}>
                            <h4>Save</h4>
                        </button>
                        <button onClick={onCancel}>
                            <h4>Cancel</h4>
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => handleCompleteTodo(todoIndex)}
                            disabled={todo.complete}
                        >
                            <h4>Complete</h4>
                        </button>
                        <button onClick={() => handleEditTodo(todoIndex)} disabled={todo.complete}>
                            <h4>Edit</h4>
                        </button>
                        <button onClick={() => handleDeleteTodo(todoIndex)}>
                            <h4>Delete</h4>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
