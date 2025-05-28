import { useEffect, useState } from 'react'
import { getFullPokedexNumber, getPokedexNumber } from '../utils'
import { TypeCard } from './TypeCard'


export function PokeCard(props) {
    const { selectedPokemon } = props
    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(false)

    const { name, height, abilities, stats, types, moves, sprites } = data || {}

    useEffect(() => {
        // Nếu đang tải, thoát logic
        if (loading || !localStorage) { return }

        // kiểm tra xem thông tin pokemon đã chọn có sẵn trong pokedex hay không
        // 1, định nghĩa bộ nhớ cache
        let cache = {}
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }

        // 2, kiểm tra xem pokemon đã chọn có trong bộ nhớ cache không, nếu không thì lấy dữ liệu từ API
        if (selectedPokemon in cache) {
            // nếu có, lấy dữ liệu từ bộ nhớ cache
            setdata(cache[selectedPokemon])
            console.log("Found pokemo in cache")
            return
        }

        // Chúng tôi đã thử tất cả các phương pháp bộ nhớ đệm mà không có kết quả và bây giờ cần lấy dữ liệu từ API.
        async function fetchPokemonData() {
            setLoading(true)
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
                const finnalUrl = baseUrl + suffix
                const res = await fetch(finnalUrl)
                const pokemonData = await res.json()
                setdata(pokemonData) // lưu dữ liệu pokemon đã lất từ API vào state
                console.log(pokemonData)

                cache[selectedPokemon] = pokemonData // lưu dữ liệu pokemon đã chọn vào bộ nhớ cache
                localStorage.setItem('pokedex', JSON.stringify(cache))
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false) // kết thúc trình tải dữ liệu
            }
        }

        fetchPokemonData()

        // nếu chúng ta lấy từ API, hãy chắc chắn lưu thông tin vào bộ nhớ cache cho lần sau
    }, [selectedPokemon])

    if (loading || !data) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div className='poke-card'>
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>
            <div className='type-container'>
                {types.map((typeObj, typeIndex) => {
                    return (
                        <TypeCard key={typeIndex} type={typeObj?.type?.name} />
                    )
                })}
            </div>
            <img className="default-img"
                src={`/pokemon/${getFullPokedexNumber(selectedPokemon)}.png`}
                alt={`${name}-large-img`}
            />
        </div>
    )
}