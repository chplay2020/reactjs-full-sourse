import { Header } from './components/Header'
import { PokeCard } from './components/PokeCard'
import { SideNav } from './components/SideNav'

import { useState } from 'react' // Import hook useState từ React để quản lý state

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0) // State lưu index Pokemon đang được chọn, khởi tạo = 0
  const [showSideMenu, setShowSideMenu] = useState(false)   // State kiểm soát hiển thị/ẩn menu bên, khởi tạo = false

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu) // Đảo ngược trạng thái hiển thị của side menu
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} /> {/* Component Header với function toggle menu */}
      <SideNav
        selectedPokemon={selectedPokemon}           // Pokemon hiện tại đang được chọn
        setSelectedPokemon={setSelectedPokemon}     // Hàm cập nhật Pokemon được chọn
        handleToggleMenu={handleToggleMenu}         // Hàm đóng menu sau khi chọn
        showSideMenu={showSideMenu}                 // Trạng thái hiển thị menu
      />
      <PokeCard selectedPokemon={selectedPokemon} /> {/* Component hiển thị thông tin chi tiết Pokemon */}
    </>
  )
}

export default App
