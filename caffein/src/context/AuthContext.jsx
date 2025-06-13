import {
    createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useState, useEffect, useContext, createContext } from "react";
import { doc, getDoc } from "firebase/firestore"

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const { children } = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function logout() {
        setGlobalUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout, resetPassword }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log("CURRENT USER: ", user)
            setGlobalUser(user)
            // nếu không có người dùng, hãy xóa trạng thái người dùng và thoát khỏi listener này
            if (!user) {
                console.log("No user")
                return
            }

            // nếu có người dùng, thì kiểm tra xem người dùng có dữ liệu trong 
            // cơ sở dữ liệu hay không, và nếu có thì lấy dữ liệu đó và cập nhật trạng thái toàn cục
            try {
                setIsLoading(true)

                // đầu tiên, chúng ta tạo một tham chiếu cho tài liệu (đối tượng json được gán nhãn),
                // sau đó chúng ta lấy tài liệu, và sau đó chúng ta chụp ảnh nó
                // để xem có gì ở đó không
                const docRef = doc(db, "users", user.uid)
                const docSnap = await getDoc(docRef)

                let firebaseData = {}
                if (docSnap.exists()) {
                    console.log("Found user data:", firebaseData)
                    firebaseData = docSnap.data()
                }
                setGlobalData(firebaseData)
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsLoading(false)
            }
        })
        return unsubscribe
    }, [])



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

//chức năng chính
{/*- Tạo Context để chia sẻ trạng thái xác thực toàn ứng dụng
- Quản lý đăng ký, đăng nhập, đăng xuất, reset mật khẩu
- Lưu trữ thông tin người dùng (globalUser, globalData)
- Đồng bộ dữ liệu với Firebase Firestore
- Theo dõi trạng thái xác thực realtime*/}