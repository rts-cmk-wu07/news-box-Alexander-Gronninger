import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./templates/Nav";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Settings from "./pages/Settings";
import CategoryContext from "./context/CategoryContext";

function App() {
  const categoryList = [
    { world: true },
    { health: true },
    { sports: true },
    { business: true },
    { travel: true },
  ];
  const [categories, setCategories] = useState(categoryList);
  console.log(categories);

  return (
    <div className="App">
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
