import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { FaHeart } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import NavLink from './NavLink'
import Logo from '../defaults/Logo'

const NAV_LINKS = [
    { name: 'Home', href: '/' , icon:<GoHomeFill />},
    { name: 'Category', href: '/category', icon: <MdDashboard /> },
    { name: 'Games', href: '/games', icon: <MdDashboard /> },
    { name: 'Wishlist', href: '/wishlist', icon: <FaHeart /> },
    { name: 'Friends', href: '/friends', icon: <FaUserFriends /> },
]

const SideBar = () => {
  return (
    <div className='col-span-2 '>
      <div className='h-screen sticky inset-0 py-5 px-10 gap-2 flex flex-col items-start bg-black/30 text-gray-50 '>
        <Logo />
        {NAV_LINKS.map((link)=><NavLink key={link.name} navLink={link} />)}
      </div>
    </div>
  )
}

export default SideBar