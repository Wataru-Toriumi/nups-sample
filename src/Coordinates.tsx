import { parseAsFloat, useQueryStates } from "nuqs";

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
    <div>
      <div className="Text">
        <p>lat: {coordinates.lat}</p>
        <p>lng: {coordinates.lng}</p>
      </div>
      <div className="SearchButton">
        <button onClick={handleSearch}>座標を変えるよ</button>
      </div>
    </div>
  );
}
