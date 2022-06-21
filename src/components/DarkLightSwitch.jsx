import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DarkLightSwitch = () => {
  const { theme, lightTheme, darkTheme, setTheme } = useContext(ThemeContext);

  const styles = {
    switch: css`
      max-width: 240px;
      height: 50px;
      width: 100%;
      border-radius: 25px;
      border: 1px solid grey;
      display: grid;
      margin: 70px auto;
      cursor: pointer;
      & h2 {
        color: ${theme.primaryTextColor};
        align-self: center;
        padding: 0;
      }
    `,
  };

  return (
    <div
      css={styles.switch}
      onClick={() => {
        console.log("theme switch clicked");
        console.log(theme.theme);
        if (theme.theme === "light") {
          setTheme(darkTheme);
        } else {
          setTheme(lightTheme);
        }
      }}
    >
      <h2>Toggle Dark Mode</h2>
    </div>
  );
};

export default DarkLightSwitch;
