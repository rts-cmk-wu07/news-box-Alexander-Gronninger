import { IoIosArrowBack } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useFetch from "../hooks/useFetch";
import Article from "../components/Article";

import placeholderImage from "../images/placeholder.jpg";

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
        margin: 0 auto 0 15px;
        font-size: 18px;
        line-height: 18px;
        text-transform: uppercase;
      }
      & svg {
        height: 24px;
        width: auto;
        margin: 0 15px 0 0;
        transform: rotate(-90deg);
      }
    `,
  };

  const API_URL =
    "http://api.nytimes.com/svc/topstories/v2/" +
    props.category +
    ".json?api-key=c50OfFb2PQdT2nTvRhfqbEWJwLAiRH8N";

  const { data, isPending, error } = useFetch(API_URL);

  return (
    <>
      <section css={styles.category}>
        <div>
          <BiCategory />
        </div>
        <h2>{props.category}</h2>
        <IoIosArrowBack />
      </section>
      {data &&
        data.results.map((result) => {
          return (
            <Article
              image={
                (result.multimedia && result.multimedia[0].url) ||
                placeholderImage
              }
              title={(result.title && result.title) || "no title available"}
              paragraph={
                (result.abstract && result.abstract) || "no paragraph available"
              }
              link={result.url && result.url}
            />
          );
        })}
    </>
  );
};

export default ArticleCategories;
