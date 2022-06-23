import ArchiveIcon from "../components/ArchiveIcon";
import ArrowIcon from "../components/ArrowIcon";
import SettingIcon from "../components/SettingIcon";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    header: css`
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 10;
    `,
    nav: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid lightgray;
      height: 65px;
      background-color: ${theme.primaryBackgroundColor};
      & svg {
        height: 24px;
        width: auto;
        color: ${theme.primaryTextColor};
        background-color: ${theme.primaryBackgroundColor};
      }
      & div {
        width: 24px;
      }
      & h1 {
        color: ${theme.primaryTextColor};
        background-color: ${theme.primaryBackgroundColor};
      }
    `,
  };
  let pageURL = useLocation().pathname;
  return (
    <>
      <header css={styles.header}>
        <nav css={styles.nav}>
          {(useLocation().pathname === "/" && <ArchiveIcon />) || <ArrowIcon />}
          <h1>
            {(pageURL === "/" && "Newsbox") ||
              (pageURL === "/archive" && "Archive") ||
              (pageURL === "/settings" && "Settings")}
          </h1>
          {(useLocation().pathname !== "/settings" && <SettingIcon />) || (
            <div></div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Nav;
