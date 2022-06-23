import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IoIosArrowBack } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import ArchiveArticle from "./ArchiveArticle";

const ArchiveCategories = (props) => {
  const { theme } = useContext(ThemeContext);
  const [arrowRotate, setArrowRotate] = useState("rotate(-90deg)");
  let savedArticles = JSON.parse(localStorage.getItem("savedArticles"));

  const styles = {
    category: css`
      display: flex;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid lightgray;
      background-color: ${theme.primaryBackgroundColor};
      position: sticky;
      width: 100%;
      top: 0;
      z-index: 5;
      & div {
        margin: 0 0 0 10px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 7px 20px 5px ${theme.secondaryBackgroundColor};
        background-color: ${theme.primaryBackgroundColor};
        & svg {
          margin: 0;
          transform: rotate(0deg);
          color: ${theme.primaryTextColor};
          background-color: ${theme.primaryBackgroundColor};
        }
      }
      & h2 {
        margin: 0 auto 0 15px;
        font-size: 18px;
        line-height: 18px;
        text-transform: uppercase;
        color: ${theme.primaryTextColor};
        background-color: ${theme.primaryBackgroundColor};
      }
      & svg {
        height: 24px;
        width: auto;
        margin: 0 15px 0 0;
        transform: ${arrowRotate};
        transition: all 1s;
        color: ${theme.primaryTextColor};
        background-color: ${theme.primaryBackgroundColor};
      }
    `,
    errors: css`
      color: ${theme.primaryTextColor};
    `,
  };

  return (
    <>
      <Collapsible
        open="True"
        onOpening={() => {
          setArrowRotate("rotate(-90deg)");
        }}
        onClosing={() => {
          setArrowRotate("rotate(-180deg)");
        }}
        trigger={
          <div css={styles.category}>
            <div>
              <BiCategory />
            </div>
            <h2>{props.category}</h2>
            <IoIosArrowBack />
          </div>
        }
      >
        {savedArticles &&
          savedArticles.map((result) => {
            if (result.category == props.category) {
              return (
                <>
                  <ArchiveArticle
                    key={result.title}
                    image={result.image && result.image}
                    title={
                      (result.title && result.title) || "no title available"
                    }
                    paragraph={
                      (result.paragraph && result.paragraph) ||
                      "no paragraph available"
                    }
                    link={result.link && result.link}
                    category={props.category}
                  />
                </>
              );
            }
          })}
      </Collapsible>
    </>
  );
};

export default ArchiveCategories;
