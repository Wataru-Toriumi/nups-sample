import { NuqsAdapter } from "nuqs/adapters/react";
import "./App.css";
import { Coordinates } from "./Coordinates";
import { Counts } from "./Counts";
import { Name } from "./Name";

function App() {
  return (
    <div className="App">
      <NuqsAdapter>
        <Name />
      </NuqsAdapter>
      <NuqsAdapter>
        <Counts />
      </NuqsAdapter>
      <NuqsAdapter>
        <Coordinates />
      </NuqsAdapter>
    </div>
  );
}

export default App;
