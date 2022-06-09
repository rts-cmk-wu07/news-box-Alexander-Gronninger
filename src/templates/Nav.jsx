import ArchiveIcon from "../components/ArchiveIcon";
import ArrowIcon from "../components/ArrowIcon";
import SettingIcon from "../components/SettingIcon";
import { useLocation } from "react-router-dom";

const pageTitle = "";

const Nav = () => {
  let pageURL = useLocation().pathname;
  return (
    <>
      <header>
        <nav>
          {(useLocation().pathname === "/" && <ArchiveIcon />) || <ArrowIcon />}
          <h1>
            {(pageURL === "/" && "Newsbox") ||
              (pageURL === "/Archive" && "Archive") ||
              (pageURL === "/settings" && "Settings")}
          </h1>
          {useLocation().pathname !== "/settings" && <SettingIcon />}
        </nav>
      </header>
    </>
  );
};

export default Nav;
