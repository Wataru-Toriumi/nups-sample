import { parseAsInteger, useQueryState } from "nuqs";

export function Counts() {
  const [count, setCount] = useQueryState(
    "count",
    parseAsInteger.withDefault(0)
  );
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  };

  return (
    <div>
      <div className="Input">
        <input type="text" value={count ?? ""} onChange={handleCountChange} />
      </div>
      <div className="ClearButton">
        <button onClick={() => setCount(null)}>count をクリアするよ</button>
      </div>
    </div>
  );
}
