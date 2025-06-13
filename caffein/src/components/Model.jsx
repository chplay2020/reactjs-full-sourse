import ReactDom from 'react-dom'

export default function Modal(props) {
    const { children, handleCloseModal } = props

    return ReactDom.createPortal(
        <div className='modal-container'>
            <button onClick={handleCloseModal} className='modal-underlay' />
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}


// Chức năng chính:
{/*- Tạo modal overlay sử dụng React Portal
- Render content vào DOM element #portal
- Xử lý đóng modal khi click overlay
- Component tái sử dụng cho các modal khác nhau*/}
