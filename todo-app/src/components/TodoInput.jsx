import { useState } from "react" // Nhập hook useState để quản lý trạng thái của ô input

export function TodoInput(props) {
    const { handleAddTodo } = props // Nhận hàm handleAddTodo từ App.jsx
    // State để lưu trữ giá trị hiện tại của ô input
    const [inputValue, setInputValue] = useState('')

    const handleSubmitTodo = () => {
        if (!inputValue.trim()) { // Kiểm tra nếu inputValue rỗng hoặc chỉ chứa khoảng trắng
            setInputValue(''); // Xóa input nếu nó chỉ là khoảng trắng
            return;
        }
        handleAddTodo(inputValue); // Gọi hàm handleAddTodo (từ App.jsx) với giá trị input hiện tại
        setInputValue(''); // Xóa nội dung ô input sau khi thêm
    }

    return (
        <div className="input-container">
            <input
                value={inputValue} // Giá trị của input được kiểm soát bởi state inputValue
                onChange={(e) => { setInputValue(e.target.value) }} // Cập nhật inputValue mỗi khi người dùng gõ
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmitTodo(); // Gọi hàm handleSubmitTodo khi nhấn Enter
                    }
                }}
                placeholder="Add a task" // Chữ gợi ý trong ô input
            />
            <button onClick={() => {
                if (!inputValue) { return } // Nếu input rỗng, không làm gì cả
                handleAddTodo(inputValue) // Gọi hàm handleAddTodo (từ App.jsx) với giá trị input hiện tại
                setInputValue('') // Xóa nội dung ô input sau khi thêm
            }}>
                <i className="fa-solid fa-plus"></i> {/* Icon dấu cộng từ Font Awesome */}
            </button>
        </div>
    )
}
