const WebsiteFooter = () => {
  return (
    <footer className="p-4 bg-gray-800 shadow-md mt-8">
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="flex flex-col items-center justify-center p-4">
          <nav>
            <ul className="flex flex-col items-center justify-center">
              <li className="text-white text-lg font-semibold mt-4">About</li>
              <li className="text-white text-lg font-semibold mt-4">
                Services
              </li>
              <li className="text-white text-lg font-semibold mt-4">Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <p className="text-center text-white">© 2021 Prem Sagar</p>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
