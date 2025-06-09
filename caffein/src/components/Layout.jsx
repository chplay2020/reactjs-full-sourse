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
            {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : (
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
                <Model handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal} />
                </Model>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    );
}