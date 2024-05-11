import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl font-bold">Prem Sagar</div>
        </Link>
        <ul className="flex space-x-4">
          <NavbarLink href="/projects" linkText="Projects" />
          <NavbarLink href="/about" linkText="About" />
          <NavbarLink href="/contact" linkText="Contact" />
        </ul>
      </div>
    </nav>
  );
};

interface NavbarLinkProps {
  href: string;
  linkText: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, linkText }) => {
  return (
    <li className="text-white">
      <Link href={href}>{linkText}</Link>
    </li>
  );
};

const WebsiteHeader: React.FC = () => {
  return (
    <header className="bg-slate-900">
      <Navbar />
    </header>
  );
};

export default WebsiteHeader;
