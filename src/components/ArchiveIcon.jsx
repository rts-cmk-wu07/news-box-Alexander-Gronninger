import { GrInbox } from "react-icons/gr";
import { Link } from "react-router-dom";

const ArchieveIcon = () => {
  return (
    <>
      <Link to="/archieve">
        <GrInbox />
      </Link>
    </>
  );
};

export default ArchieveIcon;
