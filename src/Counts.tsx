import { parseAsInteger, useQueryState } from "nuqs";
import "./styles.css";

export function Counts() {
  const [count, setCount] = useQueryState(
    "count",
    parseAsInteger.withDefault(0)
  );
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value);
    setCount(value);
  };

  return (
    <div className="container">
      <h3 className="container-title">カウント</h3>
      <div className="input-group">
        <input
          type="number"
          value={count ?? ""}
          onChange={handleCountChange}
          className="input"
          placeholder="数値を入力してください"
        />
      </div>
      <button onClick={() => setCount(null)} className="button">
        カウントをクリア
      </button>
    </div>
  );
}
