const ResponsiveH3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4 md:mb-6 lg:mb-8">
      {children}
    </h3>
  );
};

export default ResponsiveH3;
