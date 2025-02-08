import { useQueryState } from "nuqs";

export function Name() {
  const [name, setName] = useQueryState("name");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameClear = () => {
    setName(null);
  };

  return (
    <div>
      <div>
        <input type="text" value={name ?? ""} onChange={handleNameChange} />
      </div>
      <div>
        <button onClick={handleNameClear}>name をクリアするよ</button>
      </div>
    </div>
  );
}
