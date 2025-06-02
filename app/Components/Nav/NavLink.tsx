"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLink = ({ navLink }: { navLink:{ href: string; name: string; icon: React.ReactElement }}) => {
  const { name, icon, href } = navLink;
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href} className={`flex items-center gap-2 p-2 my-2 hover:bg-gray-300 hover:text-gray-700 duration-200 rounded-md ${isActive ? 'text-blue-400 ' : ' text-gray-50'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
      {name}
    </Link>
  )
}

export default NavLink