import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

import {RiSettings3Line} from 'react-icons/ri'
import { SearchBox } from "./SearchBox";
import { SearchHeaderOptions } from "./SearchHeaderOptions";

function SearchHeader(){
    return(
        <>
        <header className="sticky top-0 bg-white">
        <div className=" flex w-full p-6 items-center justify-between">
            <Link href='/'>
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt="Google Logo"
            width={120}
            height={40}/>
           </Link>
           <div className="flex-1">
          <SearchBox/>
           </div>
           <div className=" hidden md:inline-flex space-x-2">
            <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
            <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
           </div>
           <button className="bg-blue-500 text-white px-5 py-2 font-medium rounded-md
                hover:brightness-105 hover-shadow-md transition-shadow ml-2">
                    Sign in
                    </button>
           </div>
           <SearchHeaderOptions/>
        </header>
        </>
    )
}
export default SearchHeader;