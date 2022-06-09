import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ArrowIcon = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
    console.log("test");
  };
  return (
    <>
      <IoIosArrowBack onClick={navigateBack} />
    </>
  );
};

export default ArrowIcon;
