import { first151Pokemon, getFullPokedexNumber } from '../utils'
import { useState } from 'react'

export function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleToggleMenu,
        showSideMenu } = props // Lấy các props từ component cha

    const [searchValue, setSearchValue] = useState('') // State lưu giá trị tìm kiếm

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => { // Lọc Pokemon dựa trên tìm kiếm
        if (getFullPokedexNumber(eleIndex).includes(searchValue)) { // Tìm theo số Pokedex
            return true
        }
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { // Tìm theo tên Pokemon
            return true
        }
        return false // Loại bỏ nếu không khớp
    })

    return (
        <nav className={' ' + (!showSideMenu ? 'open' : '')}> {/* Nav với class động */}
            <div className={'header ' + (!showSideMenu ? 'open' : '')}>
                <button className='open-nav-button' onClick={handleToggleMenu}> {/* Nút đóng menu */}
                    <i className='fa-solid fa-arrow-left-long'></i> {/* Icon mũi tên trái */}
                </button>
                <h1 className='text-gradient'> PokeDex</h1> {/* Tiêu đề với gradient */}
            </div>
            <input placeholder='E.g. 001 or Bulba...' value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value) // Cập nhật giá trị tìm kiếm
            }} />
            {filteredPokemon.map((pokemon, pokemonIndex) => { // Render danh sách Pokemon đã lọc
                const truePokemonNumber = first151Pokemon.indexOf(pokemon) // Tìm index thực trong danh sách gốc
                return (
                    <button onClick={() => {
                        setSelectedPokemon(truePokemonNumber) // Cập nhật Pokemon được chọn
                    }} key={pokemonIndex} className={'nav-card ' +
                        (truePokemonNumber === selectedPokemon ? 'nav-card-selected' : ' ')}> {/* Class động cho Pokemon được chọn */}
                        <p>{getFullPokedexNumber(truePokemonNumber)}</p> {/* Số Pokedex đầy đủ */}
                        <p>{pokemon}</p> {/* Tên Pokemon */}
                    </button>
                )
            })}
        </nav>
    )
}
