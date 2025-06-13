export default function Hero() {
    return (
        <>
            <h1>Coffe Tracking for Coffe <abbr title="An enthusiast or devotee">Friends</abbr>!</h1>
            <div className="benefits-list">
                <h3 className="font-bolder">Try <span className="text-gradient">Caffein</span> and start ...</h3>
                <p>✔️ Tracking every coffe</p>
                <p>✔️ Measuring your blood caffeine levels</p>
                <p>✔️ Costing and quanitifying our addtition</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know...</h3>
                </div>
                <h5>That caffeine&apos;s half-life is about 5 hours?</h5>
                <p>This means that after 5 hours, half the caffeine you consumed
                    is still in your system, keeping you alert longer! So if you
                    drink a cup of coffe with 200 mg of cafeine, 5 hours, later,
                    you&apos;ll still have about 100 mg of caffeine in your system.</p>
            </div>
        </>
    )
}

// Chức năng chính:
{/*- Hiển thị tiêu đề và slogan ứng dụng
- Liệt kê các tính năng chính (benefits-list)
- Thông tin giáo dục về caffeine (info-card)
- Giao diện tĩnh, không có logic phức tạp*/}
