import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex font-semibold items-center text-lg md:text-2xl gap-2 p-2 my-2">
      <h1 className=' text-rose-500'>Gaming</h1>
      <span className='text-gray-500'>Boi</span>
    </Link>
  )
}

export default Logo