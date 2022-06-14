import ArchiveIcon from "../components/ArchiveIcon";
import ArrowIcon from "../components/ArrowIcon";
import SettingIcon from "../components/SettingIcon";
import { useLocation } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Nav = () => {
  const styles = {
    nav: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid lightgray;
      & svg {
        height: 24px;
        width: auto;
      }
      & div {
        width: 24px;
      }
    `,
  };
  let pageURL = useLocation().pathname;
  return (
    <>
      <header>
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
