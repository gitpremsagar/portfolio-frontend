import Section from "@/components/customUIs/Section";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center h-full bg-gray-700 text-white p-20">
        <h1 className="text-4xl font-bold text-center">I'm Prem Sagar</h1>
        <p className="text-center text-lg mt-4">
          I'm a full-stack developer and a freelance web developer
        </p>
      </div>
    </Section>
  );
};

export default HeroSection;
