import {
    coffeeConsumptionHistory, getCaffeineAmount,
    timeSinceConsumption, calculateCurrentCaffeineLevel
} from "../utils"


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
                        const coffee = coffeeConsumptionHistory[utcTime]
                        const timeSinceConsume = timeSinceConsumption(utcTime)
                        const originalAmount = getCaffeineAmount(coffee.name)
                        const remainingAmount = calculateCurrentCaffeineLevel({
                            [utcTime]: coffee
                        })

                        const sumary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} |
                         ${remainingAmount}mg / ${originalAmount}mg`

                        return (
                            <div title={sumary} key={coffeeIndex}>
                                <i className="fa-solid fa-mug-hot"></i>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}