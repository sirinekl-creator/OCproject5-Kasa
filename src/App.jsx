import { Routes, Route } from "react-router-dom";
import logements from "./data/logements.json";

function App() {
  console.log(logements);

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;