export default function Layout(props) {
    const { children } = props;

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFEIN</h1>
                <p>For Coffe Insatiates</p>
            </div>
            <button>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffein</span> was made by <a target="_blank" href="">chplay2020</a><br />
                using the <a href="" target="_blank">FantaCSS</a> design library.</p>
        </footer>
    )
    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    );
}