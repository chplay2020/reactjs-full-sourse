import { coffeeOptions } from "../utils";
import { useState } from "react";
import Model from "./Model";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../firebase"

export default function CoffeeForm(props) {
    const { isAuthenticated } = props;
    const [showModal, setShowModal] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState(null); //selectedCoffee là giá trị gốc, setSelectedCaffee là giá trị cập nhật vào selectedCoffee
    //với giá trị ban đầu là null 
    const [showCoffeeTypes, setshowCoffeeTypes] = useState(false);
    const [coffeeCost, setCoffeeCost] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);

    const { globalData, setGlobalData, globalUser } = useAuth()

    async function handleSubmitForm() {
        if (!isAuthenticated) {
            setShowModal(true)
            return
        }

        // define a guard clause that only submits the form if it is completed
        if (!selectedCoffee) {
            return
        }

        try {
            // then we're going to create a new data object
            const newGlobalData = {
                ...(globalData || {})
            }

            const nowTime = Date.now()
            const timeToSubtract = (hour * 60 * 60 * 1000) + (min * 60 * 1000)
            const timestamp = nowTime - timeToSubtract

            const newData = {
                name: selectedCoffee,
                cost: coffeeCost
            }
            newGlobalData[timestamp] = newData
            console.log(timestamp, selectedCoffee, coffeeCost)

            // update the global state
            setGlobalData(newGlobalData)

            // persist the data in the firebase firestore
            const userRef = doc(db, 'users', globalUser.uid)
            const res = await setDoc(userRef, {
                [timestamp]: newData
            }, { merge: true })

            setSelectedCoffee(null)
            setHour(0)
            setMin(0)
            setCoffeeCost(0)
        } catch (err) {
            console.log(err.message)
        }
    }

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
            <div className="section-header">
                <i className="fa-solid fa-pencil"></i>
                <h2>Start Tracking Today</h2>
            </div>

            <h4>Select coffee type</h4>
            <div className="coffee-grid">
                {coffeeOptions.slice(0, 5).map((option, optionIndex) => { //slice xuất một phần giá trị trong mảng mà không thay đổi dữ liệu gốc
                    return (
                        <button onClick={() => {
                            setSelectedCoffee(option.name)
                            setshowCoffeeTypes(false)
                        }} className={"button-card " + (option.name ===  //khi đúng selectedCoffee thì add class coffee-button-selected vào button
                            selectedCoffee ? " coffee-button-selected" : " ")}
                            key={optionIndex}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                    )
                })}
                <button onClick={() => {
                    setshowCoffeeTypes(true)
                    setSelectedCoffee(null)
                }} className={"button-card " + (showCoffeeTypes ? " coffee-button-selected" : " ")}>
                    <h4>Other</h4>
                    <p>n/a</p>
                </button>
            </div>

            {showCoffeeTypes && ( //nếu showCoffeeTypes là true thì hiển thị các option (nế vế trái đúng thì vế phải thực hiện và ngược lại)
                <select onChange={(e) => { // click select xuất hiện dropdown list các option
                    setSelectedCoffee(e.target.value) // onChange là sự kiện lưu giá trị thay đổi của input
                }} name="coffee-list" id="coffee-list">
                    <option value={null}>Select type</option>
                    {coffeeOptions.map((option, optionIndex) => {
                        return (
                            <option key={optionIndex} value={option.name}>
                                {option.name} ({option.caffeine}mg)
                            </option>
                        )
                    })}
                </select>
            )}

            <h4>Add the cost ($)</h4> {/*lựa chọn giá tiền*/}
            <input type="number" className="w-full"
                value={coffeeCost} onChange={(e) => {
                    setCoffeeCost(e.target.value)
                }} placeholder="1.50" />
            <h4>Time since consumption</h4>

            <div className="time-entry"> {/*lựa chọn thời gian trong ngày*/}
                <div>
                    <h6>Hours</h6>
                    <select onChange={(e) => {
                        setHour(e.target.value)
                    }} id="hours-select"> {/*lựa chọn giờ*/}
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                            16, 17, 18, 19, 20, 21, 22, 23].map((hour, hourIndex) => { //hour là giá trị hiện tại troing mảng, hourIndex là vị trí của giá trị hiện tại trong mảng
                                return (
                                    <option key={hourIndex} value={hour}>
                                        {hour}
                                    </option>
                                )
                            })}
                    </select>
                </div>

                <div>
                    <h6>Mins</h6>
                    <select onChange={(e) => {
                        setMin(e.target.value)
                    }} id="mins-select"> {/*lựa chọn phút*/}
                        {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((min, minIndex) => { //hour là giá trị hiện tại troing mảng, hourIndex là vị trí của giá trị hiện tại trong mảng
                            return (
                                <option key={minIndex} value={min}>
                                    {min}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>

            <button onClick={handleSubmitForm}>
                <p>Add Entry</p>
            </button>
        </>
    )
}