export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props // Nhận props từ App.jsx

    const tabs = ['All', 'Open', 'Completed'] // Mảng các tên tab
    return (
        <nav className="tab-container"> {/* Container cho các tab, có thể cuộn ngang */}

            {/* Lặp qua mảng tabs để tạo mỗi nút tab */}
            {tabs.map((tab, tabIndex) => {
                // Tính số lượng công việc cho mỗi tab
                const numOfTasks = tab === 'All' ? todos.length :
                    tab === 'Open' ?
                        todos.filter(val => !val.complete).length : // Đếm công việc chưa hoàn thành
                        todos.filter(val => val.complete).length;  // Đếm công việc đã hoàn thành

                return (
                    <button
                        onClick={() => {
                            setSelectedTab(tab) // Khi click, gọi hàm setSelectedTab để cập nhật tab đang chọn
                        }}
                        key={tabIndex} // Key cho React để quản lý danh sách hiệu quả
                        // Class động: 'tab-button' và 'tab-selected' nếu tab này đang được chọn
                        className={"tab-button " + (tab === selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab} <span>({numOfTasks})</span></h4> {/* Hiển thị tên tab và số lượng công việc */}
                    </button>
                )
            })}
            <hr /> {/* Đường kẻ ngang phân cách */}
        </nav>
    )
}
