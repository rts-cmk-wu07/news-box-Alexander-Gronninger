import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IoIosArrowBack } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useFetch from "../hooks/useFetch";
import Article from "../components/Article";
import { useState } from "react";
import Collapsible from "react-collapsible";

import placeholderImage from "../images/placeholder.jpg";

const ArticleCategories = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [arrowRotate, setArrowRotate] = useState("rotate(-90deg)");

  const styles = {
    category: css`
      display: flex;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid lightgray;
      background-color: ${theme.primaryBackgroundColor};
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

  const API_URL =
    "http://api.nytimes.com/svc/topstories/v2/" +
    props.category +
    ".json?api-key=c50OfFb2PQdT2nTvRhfqbEWJwLAiRH8N";

  const { data, isPending, error } = useFetch(API_URL);

  return (
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
      {error && <p css={styles.error}>Couuldn't load content...</p>}
      {error && <p css={styles.error}>Please try again in a minute...</p>}
      {isPending && <p css={styles.error}>Loading...</p>}
      {data &&
        data.results.map((result) => {
          return (
            <>
              {result.multimedia && result.title && result.abstract && (
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
              )}
            </>
          );
        })}
    </Collapsible>
  );
};

export default ArticleCategories;
