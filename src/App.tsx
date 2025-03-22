import "./App.css";
import { Coordinates } from "./Coordinates";
import { Counts } from "./Counts";
import { Name } from "./Name";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>nuqs パラメータアプリ</h1>
        <p className="App-subtitle">URLクエリパラメータで状態を管理</p>
      </header>
      <Name />
      <Counts />
      <Coordinates />
    </div>
  );
}

export default App;
