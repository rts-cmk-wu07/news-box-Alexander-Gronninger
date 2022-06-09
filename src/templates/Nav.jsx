import ArchieveIcon from "../components/ArchiveIcon";
import ArrowIcon from "../components/ArrowIcon";
import SettingIcon from "../components/SettingIcon";

const pageTitle = "";

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <ArrowIcon />
          <ArchieveIcon />
          <h1>{pageTitle}</h1>
          <SettingIcon />
        </nav>
      </header>
    </>
  );
};

export default Nav;
