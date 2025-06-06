// Object định nghĩa các mức độ caffeine với màu sắc, mô tả và giới hạn tối đa
export const statusLevels = {
    low: { // Mức độ caffeine thấp
        color: "#047857", // Màu xanh lá đậm cho text
        background: "#d1fae5", // Màu nền xanh lá nhạt
        description: 'Caffeine levels are mild, resulting in a light boost in alertness with minimal side effects.', // Mô tả tác động nhẹ
        maxLevel: 100 // Giới hạn tối đa 100mg caffeine
    },
    moderate: { // Mức độ caffeine trung bình
        color: "#b45309", // Màu cam đậm cho text
        background: "#fef3c7", // Màu nền vàng nhạt
        description: 'A moderate amount of caffeine leads to noticeable stimulation, increased focus, and potential restlessness.', // Mô tả tác động trung bình
        maxLevel: 200 // Giới hạn tối đa 200mg caffeine
    },
    high: { // Mức độ caffeine cao
        color: "#e11d48", // Màu đỏ đậm cho text
        background: "#ffe4e6", // Màu nền hồng nhạt
        description: 'Elevated caffeine levels can cause jitteriness, rapid heartbeat, and trouble concentrating, signaling an excessive intake.', // Mô tả tác động mạnh
        maxLevel: 9999 // Giới hạn rất cao (thực tế là không giới hạn)
    },
}

// Object chứa lịch sử tiêu thụ cà phê với timestamp làm key
export const coffeeConsumptionHistory = {
    // key                      value
    "1727579064032": { "name": "Americano", "cost": 5.52 },
    "1727629263026": { "name": "Rockstar Energy (16oz)", "cost": 6.78 }, // Mỗi entry có tên và giá (value)
    "1727571485301": { "name": "Macchiato", "cost": 6.93 }, // Timestamp là milliseconds từ epoch
    "1727585485245": { "name": "Instant Coffee (1 tsp)", "cost": 4.90 }, // Dữ liệu mẫu cho demo
    "1727614392214": { "name": "Irish Coffee", "cost": 4.88 },
    "1727642088808": { "name": "Flat White", "cost": 5.04 },
    "1727600684481": { "name": "Latte", "cost": 3.99 },
    "1727615806680": { "name": "Drip Coffee (12oz)", "cost": 3.59 },
    "1727609623836": { "name": "Bang Energy (16oz)", "cost": 3.43 },
    "1727647449961": { "name": "Monster Java (15oz)", "cost": 4.44 },
    "1727595771504": { "name": "Red Eye", "cost": 3.45 },
    "1727586709242": { "name": "5-hour Energy (2oz)", "cost": 5.60 },
    "1727592250322": { "name": "Cortado", "cost": 4.48 },
    "1727630731059": { "name": "NOS Energy Drink (16oz)", "cost": 3.71 },
    "1727584588314": { "name": "Drip Coffee (12oz)", "cost": 5.96 },
    "1727630390005": { "name": "Celsius Energy Drink (12oz)", "cost": 3.23 },
    "1727595715018": { "name": "Matcha Latte", "cost": 4.49 },
    "1727605577918": { "name": "AMP Energy Drink (16oz)", "cost": 6.29 },
    "1727565390441": { "name": "Vietnamese Coffee", "cost": 3.38 },
    "1727641229973": { "name": "Flat White", "cost": 5.42 },
    "1727610658037": { "name": "Black Coffee (8oz)", "cost": 3.46 },
    "1727620751667": { "name": "Bang Energy (16oz)", "cost": 6.39 },
    "1727597163157": { "name": "Monster Energy (16oz)", "cost": 6.81 },
    "1727590586957": { "name": "Iced Coffee (8oz)", "cost": 3.76 },
    "1727610760698": { "name": "Monster Java (15oz)", "cost": 4.41 },
    "1727601688000": { "name": "Nitro Cold Brew (12oz)", "cost": 4.59 },
    "1727602354621": { "name": "Turkish Coffee", "cost": 3.96 },
    "1727599341790": { "name": "Double Espresso", "cost": 5.89 },
    "1727566519925": { "name": "Flat White", "cost": 3.87 },
    "1727554338958": { "name": "Espresso", "cost": 3.51 },
    "1727623439992": { "name": "Red Bull (8.4oz)", "cost": 5.21 },
    "1727569314281": { "name": "AMP Energy Drink (16oz)", "cost": 5.58 },
    "1727577846796": { "name": "Starbucks Doubleshot (6.5oz)", "cost": 6.51 },
    "1727651270793": { "name": "Drip Coffee (12oz)", "cost": 5.49 },
    "1727571590403": { "name": "Red Eye", "cost": 3.66 },
    "1727575199865": { "name": "Reign Energy Drink (16oz)", "cost": 6.94 },
    "1727613114673": { "name": "Vietnamese Coffee", "cost": 4.08 },
    "1727553981855": { "name": "Cold Brew (12oz)", "cost": 4.87 },
    "1727628992138": { "name": "Zipfizz (1 tube)", "cost": 6.58 },
    "1727626471677": { "name": "Reign Energy Drink (16oz)", "cost": 3.24 },
    "1727618530023": { "name": "Zipfizz (1 tube)", "cost": 6.99 },
    "1727616747401": { "name": "Turkish Coffee", "cost": 5.38 },
    "1727635847332": { "name": "Black Coffee (8oz)", "cost": 6.11 }
}

// Mảng chứa danh sách các loại đồ uống với tên và hàm lượng caffeine
export const coffeeOptions = [
    { "name": "Espresso", "caffeine": 63 },
    { "name": "Double Espresso", "caffeine": 126 },
    { "name": "Americano", "caffeine": 96 },
    { "name": "Cappuccino", "caffeine": 80 },
    { "name": "Latte", "caffeine": 80 },
    { "name": "Mocha", "caffeine": 90 },
    { "name": "Macchiato", "caffeine": 85 },
    { "name": "Flat White", "caffeine": 130 },
    { "name": "Cortado", "caffeine": 85 },
    { "name": "Red Eye", "caffeine": 159 },
    { "name": "Black Coffee (8oz)", "caffeine": 95 },
    { "name": "Iced Coffee (8oz)", "caffeine": 90 },
    { "name": "Cold Brew (12oz)", "caffeine": 155 },
    { "name": "Nitro Cold Brew (12oz)", "caffeine": 215 },
    { "name": "Drip Coffee (12oz)", "caffeine": 120 },
    { "name": "Frappuccino", "caffeine": 95 },
    { "name": "Turkish Coffee", "caffeine": 160 },
    { "name": "Irish Coffee", "caffeine": 70 },
    { "name": "Vietnamese Coffee", "caffeine": 100 },
    { "name": "Affogato", "caffeine": 65 },
    { "name": "Instant Coffee (1 tsp)", "caffeine": 30 },
    { "name": "Decaf Coffee", "caffeine": 2 },
    { "name": "Chai Latte", "caffeine": 40 },
    { "name": "Matcha Latte", "caffeine": 70 },
    { "name": "Monster Energy (16oz)", "caffeine": 160 },
    { "name": "Red Bull (8.4oz)", "caffeine": 80 },
    { "name": "Rockstar Energy (16oz)", "caffeine": 160 },
    { "name": "Bang Energy (16oz)", "caffeine": 300 },
    { "name": "Celsius Energy Drink (12oz)", "caffeine": 200 },
    { "name": "5-hour Energy (2oz)", "caffeine": 200 },
    { "name": "NOS Energy Drink (16oz)", "caffeine": 160 },
    { "name": "Reign Energy Drink (16oz)", "caffeine": 300 },
    { "name": "Starbucks Doubleshot (6.5oz)", "caffeine": 135 },
    { "name": "Monster Java (15oz)", "caffeine": 188 },
    { "name": "AMP Energy Drink (16oz)", "caffeine": 142 }, //
    { "name": "Zipfizz (1 tube)", "caffeine": 100 }
]

const halfLifeHours = 5 // Thời gian bán hủy của caffeine trong cơ thể (5 giờ)

// Hàm tính toán mức caffeine hiện tại trong cơ thể dựa trên lịch sử tiêu thụ
export function calculateCurrentCaffeineLevel(historyData) {
    const currentTime = Date.now() // Lấy thời gian hiện tại (milliseconds)
    const halfLife = halfLifeHours * 60 * 60 * 1000 // Chuyển đổi 5 giờ thành milliseconds
    const maxAge = 48 * 60 * 60 * 1000 // 48 giờ tối đa để tính (milliseconds)

    let totalCaffeine = 0 // Biến tích lũy tổng caffeine

    // Duyệt qua từng entry trong lịch sử tiêu thụ
    for (const [timestamp, entry] of Object.entries(historyData)) { //Object.entries(historyData): Chuyển đổi object historyData thành một mảng các cặp [key, value]
        // timestamp: là key của object historyData, entry: là value của object historyData
        const timeElapsed = currentTime - parseInt(timestamp) // Tính thời gian đã trôi qua

        // Chỉ tính những entry trong vòng 48 giờ qua
        if (timeElapsed <= maxAge) {
            const caffeineInitial = getCaffeineAmount(entry.name) // Lấy lượng caffeine ban đầu
            // Tính caffeine còn lại sử dụng công thức bán hủy: C = C0 * (0.5)^(t/t_half)
            const remainingCaffeine = caffeineInitial * Math.pow(0.5, timeElapsed / halfLife)
            totalCaffeine += remainingCaffeine // Cộng dồn vào tổng
        }
    }

    return totalCaffeine.toFixed(2) // Trả về kết quả làm tròn 2 chữ số thập phân
}

// Hàm helper để lấy lượng caffeine dựa trên tên đồ uống
export function getCaffeineAmount(coffeeName) {
    const coffee = coffeeOptions.find(c => c.name === coffeeName) // Tìm đồ uống trong danh sách
    return coffee ? coffee.caffeine : 0 // Trả về caffeine nếu tìm thấy, ngược lại trả về 0
}

// Hàm lấy top 3 loại cà phê được tiêu thụ nhiều nhất
export function getTopThreeCoffees(historyData) {
    const coffeeCount = {} // Object để đếm số lần tiêu thụ mỗi loại

    // Chỉ quan tâm đến TÊN để đếm số lần xuất hiện
    for (const entry of Object.values(historyData)) {
        const coffeeName = entry.name // chỉ lấy tên đồ uống
        if (coffeeCount[coffeeName]) { // Nếu đã tồn tại
            coffeeCount[coffeeName]++ // Tăng counter lên 1 // Ví dụ: Americano: 3(lần), Latte: 2(lần)
        } else {
            coffeeCount[coffeeName] = 1 // Khởi tạo counter = 1
        }
    }

    // Chuyển đổi object thành array và sắp xếp theo số lần tiêu thụ giảm dần
    const sortedCoffees = Object.entries(coffeeCount).sort((a, b) => b[1] - a[1]) // Object.entries() chuyển đối tượng thành array để sort
    // a và b là các array con, ví dụ: a = ["Americano", 5], b = ["Latte", 3]
    // a[0] = "Americano", a[1] = 5
    // b[0] = "Latte", b[1] = 3

    // b[1] - a[1] = 3 - 5 = -2 (âm) → a đứng trước b
    // Sắp xếp theo count giảm dần (index [1])

    // Kết quả sau khi sort:
    {
        /*[
            ["Espresso", 8],     // cao nhất
            ["Americano", 5],    
            ["Latte", 3],
            ["Cappuccino", 2]    // thấp nhất
        ]*/
    }



    // Tính tổng số cà phê đã tiêu thụ
    const totalCoffees = Object.values(coffeeCount).reduce((sum, count) => sum + count, 0)

    // Lấy top 3 và tính phần trăm
    const topThree = sortedCoffees.slice(0, 3).map(([coffeeName, count]) => { //lấy top 3 giá trị đầu tiên sau khi thực hiện lênh dưới
        const percentage = ((count / totalCoffees) * 100).toFixed(2) // Tính phần trăm
        return {
            coffeeName: coffeeName, // Tên đồ uống
            count: count, // Số lần tiêu thụ
            percentage: percentage + '%' // Phần trăm với ký hiệu %
        }
    })

    return topThree // Trả về array top 3
}

// Hàm tính thời gian đã trôi qua kể từ lần tiêu thụ cuối
export function timeSinceConsumption(utcMilliseconds) {
    const now = Date.now() // Thời gian hiện tại
    const diffInMilliseconds = now - utcMilliseconds // Tính khoảng cách thời gian

    // Chuyển đổi thành các đơn vị thời gian khác nhau
    const seconds = Math.floor(diffInMilliseconds / 1000) // Chuyển thành giây
    const minutes = Math.floor(seconds / 60) // Chuyển thành phút
    const hours = Math.floor(minutes / 60) // Chuyển thành giờ
    const days = Math.floor(hours / 24) // Chuyển thành ngày
    const months = Math.floor(days / 30) // Chuyển thành tháng (ước tính 30 ngày/tháng)

    // Tính phần dư cho mỗi đơn vị
    const remainingDays = days % 30 // Số ngày còn lại sau khi trừ tháng
    const remainingHours = hours % 24 // Số giờ còn lại sau khi trừ ngày
    const remainingMinutes = minutes % 60 // Số phút còn lại sau khi trừ giờ
    const remainingSeconds = seconds % 60 // Số giây còn lại sau khi trừ phút

    // Xây dựng chuỗi kết quả
    let result = ''
    if (months > 0) result += `${months}M ` // Thêm tháng nếu > 0
    if (remainingDays > 0) result += `${remainingDays}D ` // Thêm ngày nếu > 0
    if (remainingHours > 0) result += `${remainingHours}H ` // Thêm giờ nếu > 0
    if (remainingMinutes > 0) result += `${remainingMinutes}M ` // Thêm phút nếu > 0
    if (remainingSeconds > 0 || result === '') result += `${remainingSeconds}S` // Thêm giây (luôn hiển thị nếu không có gì khác)

    return result.trim() // Loại bỏ khoảng trắng thừa ở cuối
}

// Hàm tính toán thống kê tổng hợp về cà phê (được thêm trong quá trình ghi hình)
export function calculateCoffeeStats(coffeeConsumptionHistory) {
    const dailyStats = {} // Object lưu thống kê theo ngày
    let totalCoffees = 0 // Tổng số cà phê
    let totalCost = 0 // Tổng chi phí
    let totalCaffeine = 0 // Tổng caffeine
    let totalDaysWithCoffee = 0 // Tổng số ngày có uống cà phê

    // Duyệt qua từng entry trong lịch sử
    for (const [timestamp, coffee] of Object.entries(coffeeConsumptionHistory)) {
        const date = new Date(parseInt(timestamp)).toISOString().split('T')[0] // Chuyển timestamp thành ngày (YYYY-MM-DD)
        const caffeine = getCaffeineAmount(coffee.name) // Lấy lượng caffeine
        const cost = parseFloat(coffee.cost) // Chuyển cost thành số

        // Khởi tạo hoặc cập nhật thống kê hàng ngày
        if (!dailyStats[date]) {
            dailyStats[date] = { caffeine: 0, cost: 0, count: 0 } // Khởi tạo object cho ngày mới
        }

        dailyStats[date].caffeine += caffeine // Cộng caffeine vào ngày đó
        dailyStats[date].cost += cost // Cộng chi phí vào ngày đó
        dailyStats[date].count += 1 // Tăng số lượng cà phê trong ngày

        // Cập nhật tổng số
        totalCoffees += 1 // Tăng tổng số cà phê
        totalCost += cost // Cộng vào tổng chi phí
    }

    const days = Object.keys(dailyStats).length; // Tổng số ngày có dữ liệu
    const dailyCaffeine = {}; // Object để lưu caffeine theo ngày (không sử dụng)

    // Tính tổng caffeine và số ngày có uống cà phê
    for (const [date, stats] of Object.entries(dailyStats)) {
        if (stats.caffeine > 0) { // Nếu ngày đó có caffeine
            totalCaffeine += stats.caffeine // Cộng vào tổng caffeine
            totalDaysWithCoffee += 1; // Tăng số ngày có uống cà phê
        }
    }

    // Tính trung bình hàng ngày
    const averageDailyCaffeine = totalDaysWithCoffee > 0 ? (totalCaffeine / totalDaysWithCoffee).toFixed(2) : 0 // Caffeine trung bình/ngày
    const averageDailyCost = totalDaysWithCoffee > 0 ? (totalCost / totalDaysWithCoffee).toFixed(2) : 0 // Chi phí trung bình/ngày
    console.log(totalCost, typeof totalCost) // Debug: in ra tổng chi phí và kiểu dữ liệu

    return {
        daily_caffeine: averageDailyCaffeine, // Caffeine trung bình mỗi ngày
        daily_cost: averageDailyCost, // Chi phí trung bình mỗi ngày
        average_coffees: (totalCoffees / days).toFixed(2), // Số cà phê trung bình mỗi ngày
        total_cost: totalCost.toFixed(2), // Tổng chi phí (làm tròn 2 chữ số)
    };
}
