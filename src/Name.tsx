import { useQueryState } from "nuqs";
import "./styles.css";

export function Name() {
  const [name, setName] = useQueryState("name");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameClear = () => {
    setName(null);
  };

  return (
    <div className="container">
      <h3 className="container-title">名前</h3>
      <div className="input-group">
        <input
          type="text"
          value={name ?? ""}
          onChange={handleNameChange}
          className="input"
          placeholder="名前を入力してください"
        />
      </div>
      <button onClick={handleNameClear} className="button">
        名前をクリア
      </button>
    </div>
  );
}
