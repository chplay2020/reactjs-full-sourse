import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
export default function Authentication(props) {
    const { handleCloseModal } = props
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [error, setError] = useState(null)

    const { signup, login } = useAuth()

    // async cho phép sử dụng await trong hàm để đợi một Promise hoàn thành và trả về kết quả
    async function handleAuthenticate() { // hàm này được gọi khi người dùng nhấn nút đăng nhập hoặc đăng ký
        // kiểm tra điều kiện để đăng nhập hoặc đăng ky
        if (!email) {
            setError('Email cannot be empty.');
            return;
        }
        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!password) {
            setError('Password cannot be empty.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try { // try catch để xử lý các lỗi xảy ra trong quá trình đăng nhập
            setIsAuthenticating(true) // băt đầu loading
            setError(null)

            if (isRegistration) {
                // register a user
                await signup(email, password) // đợi đăng ký hoàn thành
            } else {
                // login a user
                await login(email, password) // đợi đăng nhập hoàn thành
            }
            handleCloseModal()
        } catch (err) { // xử lý nếu có lỗi
            console.log(err.message)
            setError(err.message)
        } finally { // luôn chạy, dù có lỗi hay không
            setIsAuthenticating(false) // kết thúc loading
        }

    }

    return (
        <>
            <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p>{isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>
            {error && ( // nếu error có giá trị thì hiển thị thông báo lỗi
                <p style={{ color: "red", fontWeight: "bold" }}>❌ {error}</p>
            )}
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" /> {/*onChange xử lý sự kiện thay đổi giá trị của input */}
            {/* với e.target.vale là giá trị của input*/}
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="********" type="password" />
            <button onClick={handleAuthenticate}><p>{isAuthenticating ? 'Authenticating...' : 'Submit'}</p></button>
            <hr />
            <div className="register-content">
                <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                <button onClick={() => { setIsRegistration(!isRegistration) }}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>
            </div>
        </>
    )
}


// Chức năng chính:
{/*- Hiển thị form đăng nhập hoặc đăng ký
- Chuyển đổi giữa 2 chế độ (Login/Sign Up)
- Xử lý validation email và password
- Gọi các hàm xác thực từ AuthContext
- Hiển thị lỗi nếu có*/}
