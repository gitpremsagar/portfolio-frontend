import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const SocialMediaHnadles = () => {
  return (
    <div className="flex space-x-4">
      <a href="http://youtube.com" target="_blank" rel="noreferrer">
        <FaYoutube className="text-3xl text-gray-500 hover:text-red-700 transition duration-300" />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <FaGithub className="text-3xl text-gray-500 hover:text-gray-800 transition duration-300" />
      </a>
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin className="text-3xl text-gray-500 hover:text-blue-700 transition duration-300" />
      </a>
      <a href="http://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter className="text-3xl text-gray-500 hover:text-blue-700 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialMediaHnadles;
