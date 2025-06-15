import { useAuth } from "../context/AuthContext";
import {
    calculateCurrentCaffeineLevel, coffeeConsumptionHistory,
    getCaffeineAmount, timeSinceConsumption
} from "../utils";

export default function History() {
    const { globalData } = useAuth() // lấy dữ liệu từ context

    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline" />
                <h2>History</h2>
            </div>
            <p><i>Hover for more information!</i></p>
            <div className="coffee-history">
                {Object.keys(globalData).sort((a, b) => b - a).map((utcTime, coffeeIndex) => {//// Object.keys() giúp chuyển đổi object thành array để có thể render dynamic list các coffee cards trong React component.
                    const coffee = globalData[utcTime]
                    const timeSinceConsume = timeSinceConsumption(utcTime)
                    const originalAmount = getCaffeineAmount(coffee.name)
                    const remainingAmount = calculateCurrentCaffeineLevel({
                        [utcTime]: coffee
                    })

                    const summary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`

                    return (
                        <div title={summary} key={coffeeIndex}>
                            <i className="fa-solid fa-mug-hot" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}


// Chức năng chính:
{/*- Hiển thị timeline các lần uống cà phê
- Sắp xếp theo thời gian (mới nhất trước)
- Tính toán caffeine còn lại trong cơ thể
- Hiển thị tooltip với thông tin chi tiết
- Sử dụng icon cà phê cho mỗi entry*/}
