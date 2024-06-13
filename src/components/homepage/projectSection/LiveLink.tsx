import { FaExternalLinkAlt } from "react-icons/fa";

const LiveLink = ({ link }: { link: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="text-md font-semibold text-blue-600 flex items-center"
    >
      <FaExternalLinkAlt className="mr-2" /> Live Link
    </a>
  );
};

export default LiveLink;
