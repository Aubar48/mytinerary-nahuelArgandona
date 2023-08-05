import React from 'react'
import {UserIcon} from '@heroicons/react/24/solid'
export const Nav = () => {
  return (
    <header className="flex p-12 bg-sky-500 mb-10 items-center justify-around px-5 pt-4 max-sm:justify-between" >
    <div className="flex w-100">
        <a className="ml-auto text-black font-bold md:text-xl xl:text-2xl" href="#">My tinerary</a>
    </div>
    <nav className="flex items-center space-x-2  font-bold md:space-x-4 md:text-xl xl:text-2xl">
            <a className=" text-black font-semibold" href="#">Home</a>
            <a className=" text-black font-semibold" href="#">Cities</a>
            <a className="flex items-baseline gap-1 py-1 px-1  text-white font-semibold bg-black rounded" href="#"> <UserIcon className='items-center h-4 w-4'></UserIcon> Login</a>         
    </nav>
</header>
  )
}
