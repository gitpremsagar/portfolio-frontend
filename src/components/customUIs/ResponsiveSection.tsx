import Section from "@/components/customUIs/Section";

const ResponsiveSection = ({ children }: { children: React.ReactNode }) => {
  return <Section className="p-4 sm:p-8 md:p-12 lg:p-16">{children}</Section>;
};

export default ResponsiveSection;
