import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { path: "/", pageName: "home" },
    { path: "/user", pageName: "user" },
    { path: "/products", pageName: "products" },
    { path: "/admin", pageName: "admin" },
  ];
  return (
    <div className="flex p-5 bg-slate-200">
      {links.map((link) => (
        <Link className="mr-5" key={link.path} href={link.path}>
          {link.pageName}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
