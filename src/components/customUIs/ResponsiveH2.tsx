const ResponsiveH2 = ({
  children,
  clasName,
}: {
  children: React.ReactNode;
  clasName?: string;
}) => {
  return (
    <h2
      className={`font-bold sm:text-4xl text-xl md:text-6xl lg:text-8xl
    ${clasName}`}
    >
      {children}
    </h2>
  );
};

export default ResponsiveH2;
