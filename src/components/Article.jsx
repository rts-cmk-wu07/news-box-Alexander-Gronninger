/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Article = () => {
  const styles = {
    article: css`
      display: grid;
      padding: 15px 25px;
      text-align: left;
      column-gap: 18px;
      border-bottom: 1px solid lightgray;
      & img {
        border-radius: 50%;
        grid-row: 1 / 3;
      }
      & h2 {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        font-size: 16px;
        margin: 0;
      }
      & p {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        font-size: 12px;
        margin: 0;
      }
    `,
  };
  return (
    <>
      <article css={styles.article}>
        <img src="https://picsum.photos/60" alt="" />
        <h2>Test Article</h2>
        <p>
          Dolore exercitation velit voluptate tempor. Consequat laboris nulla
          dolor magna in dolor
        </p>
      </article>
    </>
  );
};

export default Article;
