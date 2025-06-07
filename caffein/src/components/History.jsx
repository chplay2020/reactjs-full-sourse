import { coffeeConsumptionHistory } from "../utils"


export default function History() {
    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline"></i>
                <h2>History</h2>
            </div>
            <p><i>Hover for more information!</i></p>
            <div className="coffee-history">
                {Object.keys(coffeeConsumptionHistory) //// Object.keys() giúp chuyển đổi object thành array để có thể render dynamic list các coffee cards trong React component.
                    .sort((a, b) => b - a)
                    .map((utcTime, coffeeIndex) => {
                        return (
                            <div key={coffeeIndex}>
                                <i className="fa-solid fa-mug-hot"></i>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}