import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const SocialMediaHnadles = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.youtube.com/channel/UCcAOvS5KtA6CC9DPhQCwZ4A"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube className="text-3xl text-gray-500 hover:text-red-700 transition duration-300" />
      </a>
      <a
        href="https://github.com/gitpremsagar"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-3xl text-gray-500 hover:text-gray-800 transition duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/prem-sagar-b45a4580/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-3xl text-gray-500 hover:text-blue-700 transition duration-300" />
      </a>
      <a
        href="https://twitter.com/PremSagar24"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="text-3xl text-gray-500 hover:text-blue-700 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialMediaHnadles;
