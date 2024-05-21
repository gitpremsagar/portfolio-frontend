import Section from "@/components/customUIs/Section";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col items-enter justify-end h-screen bg-[url('/me6-min.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black bg-opacity-50 p-20 text-white -translate-y-40 text-center">
          <h1 className="font-bold text-6xl">{`Hi, I'm Prem Sagar.`}</h1>
          <p className="text-xl ">
            {`I'm a full-stack developer, a YouTuber and a teacher and a loving
            father of my daughter. I like to work as freelancer. Technologies
            that i use when I create website are React, Node.js, MongoDB, HTML,
            JavaScript and more.`}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
