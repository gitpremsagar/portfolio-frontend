const ResponsiveH2 = ({
  children,
  clasName,
}: {
  children: React.ReactNode;
  clasName?: string;
}) => {
  return (
    <h2
      className={`font-bold sm:text-4xl text-xl md:text-6xl lg:text-8xl my-4 sm:my-8 md:my-12 lg:my-16 text-center text-gray-600
    ${clasName}`}
    >
      {children}
    </h2>
  );
};

export default ResponsiveH2;
