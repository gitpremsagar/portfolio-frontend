"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    console.log("user in redux store = ", user);
  }, [user]);

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl font-bold">Prem Sagar</div>
        </Link>
        <ul className="flex space-x-4">
          <NavbarLink href="/dashboard/portfolio" linkText="Portfolio" />
          <NavbarLink href="/dashboard/blog" linkText="Blog" />
          <NavbarLink href="/dashboard/youtube" linkText="YouTube" />
          {user.userId !== "" ? (
            <>
              <NavbarLink href="/dashboard" linkText="Dashboard" />
              <NavbarLink href="/sign-out" linkText="Sign Out" />
            </>
          ) : (
            <>
              <NavbarLink href="/sign-in" linkText="Login In" />
              <NavbarLink href="/sign-up" linkText="Sign Up" />
            </>
          )}
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

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-slate-900">
      <Navbar />
    </header>
  );
};

export default AdminHeader;
