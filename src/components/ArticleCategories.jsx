import { IoIosArrowBack } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ArticleCategories = (props) => {
  const styles = {
    category: css`
      display: flex;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid lightgray;
      & div {
        margin: 0 0 0 10px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 7px 20px 5px lightgray;
        & svg {
          margin: 0;
        }
      }
      & h2 {
        margin: 0 auto 0 5px;
        line-height: 24px;
      }
      & svg {
        height: 24px;
        width: auto;
        margin: 0 15px 0 0;
      }
    `,
  };
  return (
    <section css={styles.category}>
      <div>
        <BiCategory />
      </div>
      <h2>{props.category}</h2>
      <IoIosArrowBack />
    </section>
  );
};

export default ArticleCategories;
