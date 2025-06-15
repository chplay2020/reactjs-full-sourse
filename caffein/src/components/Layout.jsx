import { useState } from "react";
import Model from "./Model";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";

export default function Layout(props) {
    const { children } = props;

    const [showModal, setShowModal] = useState(false)

    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFEIN</h1>
                <p>For Coffe Insatiates</p>
            </div>
            {globalUser ? ( // nếu true thì thực hiện lệnh sau
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : ( // nếu false thì thực hiện lệnh sau
                <button onClick={() => setShowModal(true)}>
                    <p>Sign up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffein</span> was made by <a target="_blank" href="">chplay2020</a><br />
                using the <a href="" target="_blank">FantaCSS</a> design library.<br />
                Check out the project on <a target="_black"
                    href="https://github.com/chplay2020/reactjs-full-sourse/tree/main/caffein">
                    Github</a>!</p>
        </footer>
    )

    function handleCloseModal() {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Model handleCloseModal={handleCloseModal}> {/*Add component con*/}
                    <Authentication handleCloseModal={handleCloseModal} /> {/*children của Modal*/}
                </Model>
            )}
            {header}
            <main>
                {children} {/*nội dung nằm trong file App.js được truyền vào*/}
            </main>
            {footer}
        </>
    );
}


// Chức năng chính:
{/*- Wrapper component cho toàn bộ ứng dụng
- Header với logo và nút đăng nhập/đăng xuất
- Footer với thông tin tác giả và links
- Quản lý modal đăng nhập từ header
- Hiển thị nút khác nhau dựa trên trạng thái đăng nhập*/}
