import { pokemonTypeColors } from "../utils";

export function TypeCard(props) {
    const { type } = props // Lấy type (loại Pokemon) từ props
    return (
        <div className="type-tile" style={{
            color: pokemonTypeColors?.[type]?.color,                    // Màu chữ dựa trên type
            backgroundColor: pokemonTypeColors?.[type]?.background      // Màu nền dựa trên type
        }}>
            <p>{type}</p> {/* Hiển thị tên loại Pokemon */}
        </div>
    );
}