export function Header(props) {
    const { handleToggleMenu } = props // Lấy hàm handleToggleMenu từ props
    return (
        <header>
            <button onClick={handleToggleMenu} className="open-nav-button"> {/* Nút hamburger menu */}
                <i className="fa-solid fa-bars"></i> {/* Icon bars từ Font Awesome */}
            </button>
            <h1 className="text-gradient">Pokedex</h1> {/* Tiêu đề với hiệu ứng gradient */}
        </header>
    )
}