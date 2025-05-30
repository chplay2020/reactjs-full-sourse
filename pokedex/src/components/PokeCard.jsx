import { useEffect, useState } from 'react'
import { getFullPokedexNumber, getPokedexNumber } from '../utils'
import { TypeCard } from './TypeCard'
import { Modal } from './Modal'

export function PokeCard(props) {
    // Lấy selectedPokemon từ props (index của Pokemon được chọn)
    const { selectedPokemon } = props

    const [data, setdata] = useState(null) // State để lưu trữ dữ liệu Pokemon từ API

    const [loading, setLoading] = useState(false)
    // State để lưu trữ thông tin skill/move được chọn
    const [skill, setSkill] = useState(null)
    // State để theo dõi trạng thái loading khi fetch dữ liệu skill
    const [loadingSkill, setLoadingSkill] = useState(false)

    // Destructuring các thuộc tính cần thiết từ data Pokemon
    // Sử dụng || {} để tránh lỗi khi data chưa được load
    const { name, height, abilities, stats, types, moves, sprites } = data || {}

    // Lọc danh sách hình ảnh sprites có sẵn
    // Loại bỏ các key không phải là URL hình ảnh trực tiếp
    const imgList = Object.keys(sprites || {}).filter(val => {
        if (!sprites[val]) return false // Loại bỏ giá trị null/undefined
        if (['versions', 'other'].includes(val)) return false // Loại bỏ nested objects
        return true
    })

    // Hàm async để fetch thông tin chi tiết của một move/skill
    async function fetchMoveData(move, moveUrl) {
        // Kiểm tra điều kiện trước khi fetch
        if (loadingSkill || !localStorage || !moveUrl) { return }

        // Kiểm tra cache cho move trong localStorage
        let c = {}
        if (localStorage.getItem('pokemon-moves')) {
            c = JSON.parse(localStorage.getItem('pokemon-moves'))
        }

        // Nếu move đã có trong cache, sử dụng dữ liệu cache
        if (move in c) {
            setSkill(c[move])
            console.log("Found move in cache")
            return
        }

        // Nếu không có trong cache, fetch từ API
        try {
            setLoading(true) // Bắt đầu loading
            const res = await fetch(moveUrl)
            const moveData = await res.json()
            setSkill(moveData) // Lưu dữ liệu move vào state
            console.log("Fetched move from API", moveData)

            // Lọc description từ flavor_text_entries cho version 'firered-leafgreen'
            const description = moveData?.flavor_text_entries.filter(
                val => {
                    return val.version_group.name = 'firered-leafgreen'
                }
            )[0]?.flavor_text

            // Tạo object skillData với tên và mô tả
            const skillData = {
                name: move,
                description
            }
            setSkill(skillData) // Cập nhật state với dữ liệu đã xử lý
            c[move] = skillData // Lưu vào cache object
            localStorage.setItem('pokemon-moves', JSON.stringify(c)) // Lưu cache vào localStorage

        } catch (err) {
            console.log(err.message) // Log lỗi nếu có
        } finally {
            setLoading(false) // Kết thúc loading dù thành công hay thất bại
        }
    }

    // useEffect để fetch dữ liệu Pokemon khi selectedPokemon thay đổi
    useEffect(() => {
        // Nếu đang loading hoặc không có localStorage, thoát khỏi function
        if (loading || !localStorage) { return }

        // Kiểm tra xem thông tin Pokemon đã chọn có sẵn trong cache hay không
        // 1. Định nghĩa object cache
        let cache = {}
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }

        // 2. Kiểm tra xem Pokemon đã chọn có trong cache không
        if (selectedPokemon in cache) {
            // Nếu có, lấy dữ liệu từ cache
            setdata(cache[selectedPokemon])
            console.log("Found pokemon in cache")
            return
        }

        // Nếu không có trong cache, fetch từ API
        async function fetchPokemonData() {
            setLoading(true) // Bắt đầu loading
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
                const finnalUrl = baseUrl + suffix
                const res = await fetch(finnalUrl)
                const pokemonData = await res.json()
                setdata(pokemonData) // Lưu dữ liệu Pokemon vào state
                console.log("Fetched pokemon data")

                cache[selectedPokemon] = pokemonData // Lưu vào cache object
                localStorage.setItem('pokedex', JSON.stringify(cache)) // Lưu cache vào localStorage
            } catch (err) {
                console.log(err.message) // Log lỗi nếu có
            } finally {
                setLoading(false) // Kết thúc loading
            }
        }

        fetchPokemonData() // Gọi function fetch

    }, [selectedPokemon]) // Dependency array: chỉ chạy khi selectedPokemon thay đổi

    // Hiển thị loading nếu đang fetch dữ liệu hoặc chưa có data
    if (loading || !data) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div className='poke-card'>
            {/* Hiển thị Modal nếu có skill được chọn */}
            {skill && ( //  Nếu skill không null hoặc không undefined thì hiển thị Modal(nếu vế trái là true thì trả về vế phải, ngược lại trả về vế trái)
                <Modal handleCloseModal={() => { setSkill(null) }}>
                    <div>
                        <h6>Name</h6>
                        {/* Hiển thị tên skill, thay thế dấu gạch ngang bằng khoảng trắng */}
                        <h2 className='skill-name'>{skill.name.replaceAll('-', ' ')}</h2>
                    </div>
                    <div>
                        <h6>Description</h6>
                        {/* Hiển thị mô tả skill */}
                        <p>{skill.description}</p>
                    </div>
                </Modal>
            )}

            {/* Hiển thị số Pokedex và tên Pokemon */}
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>

            {/* Hiển thị các loại Pokemon */}
            <div className='type-container'>
                {types.map((typeObj, typeIndex) => {
                    return (
                        <TypeCard key={typeIndex} type={typeObj?.type?.name} />
                    )
                })}
            </div>

            {/* Hiển thị hình ảnh chính của Pokemon */}
            <img className="default-img"
                src={`/pokemon/${getFullPokedexNumber(selectedPokemon)}.png`}
                alt={`${name}-large-img`} />

            {/* Hiển thị các sprite images khác */}
            <div className="img-container">
                {imgList.map((spriteUrl, spriteIndex) => {
                    const imgUrl = sprites[spriteUrl]
                    return (
                        <img key={spriteIndex}
                            className="poke-img"
                            src={imgUrl}
                            alt={`${name}-img-${spriteUrl}`} />
                    )
                })}
            </div>

            {/* Hiển thị thống kê Pokemon */}
            <h3>Stats</h3>
            <div className='ststs-card'>
                {stats.map((statObj, statIndex) => {
                    const { stat, base_stat } = statObj
                    return (
                        <div key={statIndex} className='stat-item'>
                            {/* Hiển thị tên stat, thay thế dấu gạch ngang bằng khoảng trắng */}
                            <p>{stat?.name.replaceAll('-', ' ')}</p>
                            {/* Hiển thị giá trị stat */}
                            <h4>{base_stat}</h4>
                        </div>
                    )
                })}
            </div>

            {/* Hiển thị danh sách moves/skills */}
            <h3>Moves</h3>
            <div className='pokemon-move-grid'>
                {moves.map((moveObj, moveIndex) => {
                    const { move } = moveObj
                    return (
                        <button className='pokemon-move'
                            key={moveIndex}
                            onClick={() => {
                                // Khi click vào move, fetch thông tin chi tiết
                                fetchMoveData(moveObj?.move?.name, moveObj?.move?.url)
                            }}>
                            {/* Hiển thị tên move, thay thế dấu gạch ngang bằng khoảng trắng */}
                            <p>{moveObj?.move?.name.replaceAll('-', ' ')}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
