import { IoIosArrowBack } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useFetch from "../hooks/useFetch";
import Article from "../components/Article";
import { useState } from "react";

import placeholderImage from "../images/placeholder.jpg";

const ArticleCategories = (props) => {
  const [categoryHeight, setCategoryHeight] = useState("100%");
  const [categoryScaleY, setCategoryScaleY] = useState("scaleY(1)");
  const [arrowRotate, setArrowRotate] = useState("rotate(-90deg)");

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
          transform: rotate(0deg);
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
        transform: ${arrowRotate};
        transition: all 0.5s;
      }
    `,
    categoryListContainer: css`
      transition: all 1s;
      height: ${categoryHeight};
      transform: ${categoryScaleY};
      transform-origin: top;
      overflow: hidden;
    `,
  };

  const API_URL =
    "http://api.nytimes.com/svc/topstories/v2/" +
    props.category +
    ".json?api-key=c50OfFb2PQdT2nTvRhfqbEWJwLAiRH8N";

  const { data, isPending, error } = useFetch(API_URL);

  const showHide = (e) => {
    if (categoryHeight === "100%") {
      setCategoryHeight("0");
      setCategoryScaleY("scaleY(0)");
      setArrowRotate("rotate(-180deg)");
    } else {
      setCategoryHeight("100%");
      setCategoryScaleY("scaleY(1)");
      setArrowRotate("rotate(-90deg)");
    }
  };

  return (
    <>
      <section>
        <div css={styles.category} onClick={showHide}>
          <div>
            <BiCategory />
          </div>
          <h2>{props.category}</h2>
          <IoIosArrowBack />
        </div>
        <div css={styles.categoryListContainer}>
          {data &&
            data.results.map((result) => {
              return (
                <Article
                  key={result.title}
                  image={
                    (result.multimedia && result.multimedia[0].url) ||
                    placeholderImage
                  }
                  title={(result.title && result.title) || "no title available"}
                  paragraph={
                    (result.abstract && result.abstract) ||
                    "no paragraph available"
                  }
                  link={result.url && result.url}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default ArticleCategories;
