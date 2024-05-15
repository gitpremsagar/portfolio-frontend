const TechnologyName = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block text-gray-800 rounded-full py-2 px-4 bg-white shadow-md border border-1 border-blue-500">
      {children}
    </div>
  );
};

export default TechnologyName;
