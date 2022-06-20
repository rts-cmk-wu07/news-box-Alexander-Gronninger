import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"; /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CategoryContext from "../context/CategoryContext";

const Switch = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { categories, setCategories } = useContext(CategoryContext);

  const styles = {
    switch: css`
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      align-self: center;
      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      & span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
      }
      & span:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
      & input:checked + span {
        background-color: #32aaaa;
      }

      & input:focus + span {
        box-shadow: 0 0 1px purple;
      }
      & input:checked + span:before {
        transform: translateX(26px);
      }
    `,
  };

  function checkObject(obj) {
    if (props.category == Object.keys(obj)[0]) {
      return true;
    }
  }

  const updateCategory = (e) => {
    if (e.target.checked) {
      categories[categories.findIndex(checkObject)][props.category] = true;
    } else {
      categories[categories.findIndex(checkObject)][props.category] = false;
    }
    setCategories(categories);
    localStorage.setItem("categorySettings", JSON.stringify(categories));
  };

  return (
    <>
      <label css={styles.switch}>
        {(props.checked && (
          <input type="checkbox" defaultChecked onClick={updateCategory} />
        )) || <input type="checkbox" onClick={updateCategory} />}
        <span></span>
      </label>
    </>
  );
};

export default Switch;
