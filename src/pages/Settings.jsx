import Switch from "../components/Switch";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import CategoryContext from "../context/CategoryContext";

const Settings = () => {
  const { categories } = useContext(CategoryContext);

  let categoriesKeys = [];
  categories.map((category) => {
    categoriesKeys.push(Object.keys(category));
  });

  const styles = {
    settings: css`
      background-color: lightgray;
      & h2 {
        padding-top: 40px;
      }
      & p {
        margin-bottom: 40px;
      }
      & section {
        background-color: white;
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
          }
          & label {
            margin: 0 0 0 auto;
          }
        }
      }
    `,
  };

  return (
    <main css={styles.settings}>
      <h2>Manage</h2>
      <p>Categories</p>

      <section>
        {categoriesKeys.map((category) => {
          return (
            <div key={category}>
              <p>{category}</p>
              <Switch category={category} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Settings;
