import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./templates/Nav";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Settings from "./pages/Settings";
import CategoryContext from "./context/CategoryContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const categoryList = [
    { world: true },
    { health: true },
    { sports: true },
    { business: true },
    { travel: true },
  ];

  const lightMode = {
    primaryColor: "#87BCBF",
    secondaryColor: "#D97D54",
    tertiaryColor: "#324755",
    quaternaryColor: "#D95454",
    primaryTextColor: "#1B1c20",
    secondaryTextColor: "#6E8CA0",
    tertiaryTextColor: "#FFFFff",
    primaryBackgroundColor: "#F0F3F4",
    secondaryBackgroundColor: "C8D1D3",
    tertiaryBackgroundColor: "#B9B0A2",
  };

  const darkMode = {
    primaryColor: "#bf8a87",
    secondaryColor: "#54b0d9",
    tertiaryColor: "#554032",
    quaternaryColor: "#54d9d9",
    primaryTextColor: "#F0F3F4",
    secondaryTextColor: "#6E8CA0",
    tertiaryTextColor: "black",
    primaryBackgroundColor: "#1B1c20",
    secondaryBackgroundColor: "C8D1D3",
    tertiaryBackgroundColor: "#a2abb9",
  };

  const [categories, setCategories] = useState(categoryList);
  const [theme, setTheme] = useState(lightMode);

  return (
    <div className="App">
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ThemeContext.Provider>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
