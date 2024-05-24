import Section from "@/components/customUIs/Section";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-4">
        <div className="col-span-2 min-h-screen">
          <Image
            src="/me6-min.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="h-full object-cover border-white"
          />
        </div>

        <div className=" p-20 col-span-2">
          <h1 className="font-bold text-6xl mb-2 uppercase">{`Prem Sagar`}</h1>
          <h2 className="text-gray-500 uppercase text-2xl mb-10">{`Full Stack Developer`}</h2>

          <p className="text-xl mb-10">
            {`I'm a full-stack developer, a YouTuber and a teacher and a loving father of my daughter. I like to work as freelancer. Technologies that i use when I create website are React, Node.js, MongoDB, HTML, JavaScript and more.`}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-10">
            {`Download Resume`}
          </button>

          <div className="flex space-x-4 mb-10">
            <a href="http://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-3xl text-gray-500 hover:text-gray-700 transition duration-300" />
            </a>
            <a href="http://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-3xl text-gray-500 hover:text-gray-700 transition duration-300" />
            </a>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-3xl text-gray-500 hover:text-gray-700 transition duration-300" />
            </a>
            <a href="http://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-3xl text-gray-500 hover:text-gray-700 transition duration-300" />
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col space-y-2">
            <SubHeading>{`Address`}</SubHeading>
            <p>{`Jamshedpur, India`}</p>

            {/* Email */}
            <SubHeading>{`Email`}</SubHeading>
            <p>{`psagar172@gmail.com`}</p>

            {/* Phone */}
            <SubHeading>{`Phone`}</SubHeading>
            <p>{`+91 9113413883`}</p>

            {/* Website */}
            <SubHeading>{`Website`}</SubHeading>
            <a
              href="https://portfolio-adef2.firebaseapp.com/"
              target="_blank"
              className="text-blue-500 hover:underline transition duration-300"
            >{`https://portfolio-adef2.firebaseapp.com/`}</a>
          </div>
        </div>
      </div>
    </Section>
  );
};

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="font-bold uppercase">{children}</h3>;
};

export default HeroSection;
