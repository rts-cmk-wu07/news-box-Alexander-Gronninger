import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaTrash } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const ArchiveArticle = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [swipe, setSwipe] = useState("0");
  const [transition, setTransition] = useState("all 0s");

  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      overflow: hidden;
      width: 125%;
      position: relative;
      left: ${swipe};
      transition: ${transition};
    `,
    article: css`
      text-decoration: none;
      width: 100%;
      & article {
        display: grid;
        padding: 15px 25px;
        column-gap: 18px;
        border-bottom: 1px solid lightgray;
        grid-template-columns: 60px auto;
        & img {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          grid-row: 1 / 3;
        }
        & h2 {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          font-size: 16px;
          margin: 0;
          text-align: left;
          width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: ${theme.primaryTextColor};
        }
        & p {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          font-size: 12px;
          margin: 0;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 16px;
          max-height: 32px;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: ${theme.primaryTextColor};
        }
        & a {
          color: ${theme.primaryTextColor};
        }
      }
    `,
    button: css`
      width: 25%;
      height: 90px;
      background-color: ${theme.quaternaryColor};
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };

  const handlers = useSwipeable({
    delta: 10,
    swipeDuration: 50000,
    onSwiping: (e) => {
      setTransition("all 0s");
      if (e.deltaX > 0) {
      } else if (e.deltaX > -100) {
        setSwipe(e.deltaX + "px");
      } else {
      }
    },
    onSwiped: (e) => {
      setSwipe("0px");
      setTransition("all 1s");
      if (e.deltaX <= -100) {
      }
    },
  });

  return (
    <div css={styles.container} {...handlers}>
      <a href={props.link} css={styles.article}>
        <article>
          <img src={props.image} alt={props.imageName} />
          <h2>{props.title}</h2>
          <p>{props.paragraph}</p>
        </article>
      </a>
      <div css={styles.button}>
        <FaTrash />
      </div>
    </div>
  );
};

export default ArchiveArticle;
