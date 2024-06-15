import SocialMediaHnadles from "@/components/homepage/heroSection/SocialMediaHandles";
import Link from "next/link";
import { NavbarLink } from "@/components/websiteHeader/PortfolioHeader";

const WebsiteFooter = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="p-4 bg-gray-800 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-4">
          <nav>
            <ul className="flex flex-col space-y-4">
              <NavbarLink href="/" linkText="Prem's Porfolio" />
              <NavbarLink href="/blog" linkText="Blog" />
              <NavbarLink href="/youtube" linkText="YouTube" />
              <NavbarLink href="#contactSection" linkText="Contact" />
            </ul>
          </nav>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 space-y-3">
          <p className="text-white text-lg font-semibold">Follow me on:</p>
          <SocialMediaHnadles />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className=" text-white">© {thisYear} Prem Sagar</p>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
