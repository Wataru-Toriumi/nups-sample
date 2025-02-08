import "./App.css";
import { Coordinates } from "./Coordinates";
import { Counts } from "./Counts";
import { Name } from "./Name";

function App() {
  return (
    <div className="App">
      <Name />
      <Counts />
      <Coordinates />
    </div>
  );
}

export default App;
