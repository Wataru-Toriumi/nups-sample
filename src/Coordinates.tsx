import { parseAsFloat, useQueryStates } from "nuqs";
import "./styles.css";

export function Coordinates() {
  const [coordinates, setCoordinates] = useQueryStates(
    {
      lat: parseAsFloat.withDefault(45.18),
      lng: parseAsFloat.withDefault(5.72),
    },
    {
      history: "push",
    }
  );

  const handleSearch = () => {
    setCoordinates({
      lat: Math.random() * 180 - 90,
      lng: Math.random() * 360 - 180,
    });
  };

  return (
    <div className="container">
      <h3 className="container-title">座標</h3>
      <div className="text">
        <p>緯度: {coordinates.lat.toFixed(4)}°</p>
        <p>経度: {coordinates.lng.toFixed(4)}°</p>
      </div>
      <button onClick={handleSearch} className="button">
        新しい座標を生成
      </button>
    </div>
  );
}
