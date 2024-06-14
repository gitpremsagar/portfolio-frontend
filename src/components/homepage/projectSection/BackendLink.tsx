import { FaFileCode } from "react-icons/fa";

const BackendLink = ({ link }: { link: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="text-md font-semibold text-green-600 flex items-center hover:underline"
    >
      <FaFileCode className="mr-2" /> Backend Code
    </a>
  );
};

export default BackendLink;
