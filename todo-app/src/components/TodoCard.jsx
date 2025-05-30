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
    const isEditing = editingIndex === todoIndex; // giá trị isEditing là true và false, nó sẽ là true nếu kiểm tra điều kiện editingIndex bằng với todoIndex

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
        //Kiểm tra todo.complete nếu tre thì thêm class todo-complete để đổi style khi todo đã hoàn thành
        <div className={`card todo-item ${todo.complete ? 'todo-complete' : ''}`}>
            {/* --- SỬA ĐỔI: Hiển thị có điều kiện dựa trên isEditing --- */}
            {isEditing ? ( // NẾU isEditing LÀ TRUE (công việc này đang được sửa):
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
            ) : ( // NẾU isEditing LÀ FALSE (công việc này KHÔNG được sửa):
                <p>{todo.input}</p>
            )}

            <div className="todo-buttons">
                {isEditing ? ( // NẾU isEditing LÀ TRUE:
                    <>
                        <button onClick={onSave}> {/*lưu giá trị editText vào todo.input*/}
                            <h4>Save</h4>
                        </button>
                        <button onClick={onCancel}>
                            <h4>Cancel</h4>
                        </button>
                    </>
                ) : (
                    // NẾU isEditing LÀ FALSE:S
                    <>
                        <button
                            onClick={() => handleCompleteTodo(todoIndex)}
                            disabled={todo.complete}
                        >
                            <h4>Complete</h4>
                        </button>
                        <button onClick={() => handleEditTodo(todoIndex)} disabled={todo.complete}> {/*chỉnh sửa todo khi nhấn edit và nút Edit không thể click khi todo.complete = true */}
                            <h4>Edit</h4>                                                            {/*(disabled như ổ khóa để không thể chỉnh sửa todo đã hoàn thành)*/}
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
