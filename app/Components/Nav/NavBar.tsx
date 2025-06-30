import React from 'react'
import Search from '../Search'
import ButtonGame from '../defaults/ButtonGame'

const NavBar = () => {
  return (
    <nav>
      <header className='flex justify-between items-center'>
        <Search />
        <div className='flex justify-between items-center gap-2'>
          <ButtonGame link='/login' text="Login"  />
          <ButtonGame link='/signup' text="Sign Up"  />
        </div>
      </header>
    </nav>
  )
}

export default NavBar