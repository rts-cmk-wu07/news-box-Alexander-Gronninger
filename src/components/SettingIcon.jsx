import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const SettingIcon = () => {
  return (
    <>
      <Link to="/settings">
        <IoMdSettings />
      </Link>
    </>
  );
};

export default SettingIcon;
