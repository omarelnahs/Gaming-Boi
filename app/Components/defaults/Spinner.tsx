import { Loader } from 'lucide-react'
import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

const Spinner = () => {
  return (<Loader className='animate-spin text-rose-400 text-sm w-5 h-5  ' size={24} />)
}

export default Spinner