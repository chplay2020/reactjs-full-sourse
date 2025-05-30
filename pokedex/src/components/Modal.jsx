import { children } from 'react'; // Import Children (không sử dụng trong code này)
import ReactDom from 'react-dom'; // Import ReactDom để sử dụng createPortal

export function Modal(props) { //props từ PokeCard
    const { children, handleCloseModal } = props // Lấy children và hàm đóng modal từ props
    return ReactDom.createPortal( // Render modal vào element có id='portal'
        <div className='modal-container'>
            <button onClick={handleCloseModal}
                className='modal-underlay'></button> {/* Lớp nền mờ, click để đóng modal */}
            <div className='modal-content'>
                {children} {/* Render nội dung được truyền vào */}
            </div>
        </div>,
        document.getElementById('portal') // Element DOM để render modal
    )
}
