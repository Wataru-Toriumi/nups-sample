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
    // 世界の主要都市の座標をリストアップ
    const cities = [
      { lat: 35.6762, lng: 139.6503 }, // 東京
      { lat: 40.7128, lng: -74.006 }, // ニューヨーク
      { lat: 51.5074, lng: -0.1278 }, // ロンドン
      { lat: 48.8566, lng: 2.3522 }, // パリ
      { lat: -33.8688, lng: 151.2093 }, // シドニー
      { lat: -1.2921, lng: 36.8219 }, // ナイロビ
      { lat: -22.9068, lng: -43.1729 }, // リオデジャネイロ
      { lat: 37.7749, lng: -122.4194 }, // サンフランシスコ
    ];

    // ランダムに都市を選択
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    // 選択した都市の周辺の座標をランダムに生成（半径約10km以内）
    setCoordinates({
      lat: randomCity.lat + (Math.random() - 0.5) * 0.1,
      lng: randomCity.lng + (Math.random() - 0.5) * 0.1,
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
