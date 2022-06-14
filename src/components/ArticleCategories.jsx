import { IoIosArrowBack } from "react-icons/io";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ArticleCategories = (props) => {
  const styles = {
    category: css`
      display: flex;
    `,
  };
  return (
    <section css={styles.category}>
      <div></div>
      <h2>{props.category}</h2>
      <IoIosArrowBack />
    </section>
  );
};

export default ArticleCategories;
