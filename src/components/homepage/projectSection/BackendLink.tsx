import { FaFileCode } from "react-icons/fa";

const BackendLink = ({ link }: { link: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="text-md font-semibold text-blue-600 flex items-center"
    >
      <FaFileCode className="mr-2" /> Backend Code
    </a>
  );
};

export default BackendLink;
