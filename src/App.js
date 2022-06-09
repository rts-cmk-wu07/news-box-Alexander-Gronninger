import "./App.css";
import Nav from "./templates/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
