import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Article = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const styles = {
    article: css`
      text-decoration: none;
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
  };

  return (
    <a href={props.link} css={styles.article}>
      <article>
        <img src={props.image} alt={props.imageName} />
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </article>
    </a>
  );
};

export default Article;
