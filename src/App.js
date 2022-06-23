import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./templates/Nav";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Settings from "./pages/Settings";
import CategoryContext from "./context/CategoryContext";
import ThemeContext from "./context/ThemeContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const categoryList = [
    { world: true },
    { health: true },
    { sports: true },
    { business: true },
    { travel: true },
  ];

  const lightTheme = {
    theme: "light",
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

  const darkTheme = {
    theme: "dark",
    primaryColor: "#bf8a87",
    secondaryColor: "#54b0d9",
    tertiaryColor: "#554032",
    quaternaryColor: "#54d9d9",
    primaryTextColor: "#F0F3F4",
    secondaryTextColor: "#6E8CA0",
    tertiaryTextColor: "black",
    primaryBackgroundColor: "#1B1c20",
    secondaryBackgroundColor: "#323131",
    tertiaryBackgroundColor: "#a2abb9",
  };

  const [categories, setCategories] = useState(categoryList);
  const [theme, setTheme] = useState(lightTheme);

  let savedTheme = JSON.parse(localStorage.getItem("theme")) || false;
  useEffect(() => {
    savedTheme && setTheme(savedTheme);
  }, []);

  let categorySettings =
    JSON.parse(localStorage.getItem("categorySettings")) || false;

  useEffect(() => {
    categorySettings && setCategories(categorySettings);
  }, []);

  const styles = {
    app: css`
      background-color: ${theme.primaryBackgroundColor};
    `,
  };

  return (
    <div className="App" css={styles.app}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <ThemeContext.Provider
          value={{ theme, lightTheme, darkTheme, setTheme }}
        >
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
