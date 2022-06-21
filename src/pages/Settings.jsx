import Switch from "../components/Switch";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import CategoryContext from "../context/CategoryContext";
import ThemeContext from "../context/ThemeContext";
import DarkLightSwitch from "../components/DarkLightSwitch";

const Settings = () => {
  const { theme } = useContext(ThemeContext);
  const { categories } = useContext(CategoryContext);
  let categorySettings =
    JSON.parse(localStorage.getItem("categorySettings")) || false;

  let categoriesKeys = [];
  categories.map((category) => {
    categoriesKeys.push(Object.keys(category));
  });

  const styles = {
    settings: css`
      padding-top: 40px;
      background-color: ${theme.primaryBackgroundColor};
      & h2 {
        color: ${theme.primaryTextColor};
      }
      & p {
        margin-bottom: 40px;
        color: ${theme.primaryTextColor};
      }
      & section {
        background-color: ${theme.secondaryBackgroundColor};
        max-width: 70%;
        border-radius: 10px;
        & div {
          display: flex;
          padding: 15px 25px;
          border-bottom: 1px solid lightgray;
          & p {
            text-align: left;
            margin: 0;
            line-height: 34px;
            text-transform: capitalize;
            color: ${theme.primaryTextColor};
          }
          & label {
            margin: 0 0 0 auto;
            color: ${theme.primaryTextColor};
          }
        }
      }
    `,
    version: css`
      color: ${theme.primaryTextColor};
      font-size: 12px;
      margin: 0 auto;
      max-width: 125px;
      margin-top: 31px;
      padding-bottom: 30px;
    `,
  };

  return (
    <main css={styles.settings}>
      <h2>Manage</h2>
      <p>Categories</p>

      <section>
        {categoriesKeys.map((category, i) => {
          return (
            <div key={category}>
              <p>{category}</p>
              <Switch
                category={category}
                checked={
                  (categorySettings && categorySettings[i][category] && true) ||
                  false
                }
              />
            </div>
          );
        })}
      </section>
      <DarkLightSwitch />
      <p css={styles.version}>Version 420.blazing</p>
    </main>
  );
};

export default Settings;
