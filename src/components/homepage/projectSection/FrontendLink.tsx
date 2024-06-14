import { FaLaptopCode } from "react-icons/fa";

const FrontendLink = ({ link }: { link: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="text-md font-semibold text-red-600 flex items-center hover:underline"
    >
      <FaLaptopCode className="mr-2" /> Frontend Code
    </a>
  );
};

export default FrontendLink;
