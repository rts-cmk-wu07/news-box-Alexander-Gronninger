import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { GrInbox } from "react-icons/gr";
import { Link } from "react-router-dom";

const ArchiveIcon = () => {
  return (
    <>
      <Link to="/archive">
        <GrInbox />
      </Link>
    </>
  );
};

export default ArchiveIcon;
