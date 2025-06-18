import { Input } from '@/components/ui/input'
import React from 'react'
import { SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <div className="w-full flex items-center gap-2 justify-between px-4 border border-input rounded-xl md:w-[40%] bg-[#333839]">
      <Input className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none shadow-none" />
      <SearchIcon className="cursor-pointer  hover:text-rose-400 w-5 h-5" />
    </div>
  )
}

export default Search
