"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
const NavBar = () => {
  const { status, data: session } = useSession();
  const links = [
    { path: "/", pageName: "home" },
    { path: "/users", pageName: "users" },
    { path: "/products", pageName: "products" },
    { path: "/admin", pageName: "admin" },
  ];

  return (
    <div className="flex p-5 bg-slate-200">
      {links.map((link) => (
        <Link className="mr-5 text-blue-500" key={link.path} href={link.path}>
          {link.pageName}
        </Link>
      ))}
      {status === "unauthenticated" && (
        <Link className="mr-5 text-blue-500" href="/api/auth/signin">
          sign in
        </Link>
      )}
      {status === "authenticated" && (
        <div className="mr-5 text-blue-500">
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-2">
            sign out
          </Link>
        </div>
      )}
      {status === "loading" && <div className="text-blue-500">...</div>}
    </div>
  );
};

export default NavBar;
