import Link from "next/link"
import {TbGridDots} from 'react-icons/tb'
import React from "react"

function HomeHeader(){
    return(
        <>
        <header className=" flex justify-end p-5 text-sm">
            <div className=" flex space-x-4 items-center">
                <Link href={"https://mail.google.com"}
                className="hover:underline">
                    Gmail
                </Link>
                <Link href={"https://Image.google.com"}
                className="hover:underline">
                    Image
                </Link>
                <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
                <button className="bg-blue-500 text-white px-5 py-2 font-medium rounded-md
                hover:brightness-105 hover-shadow-md transition-shadow">
                    Sign in
                    </button>
            </div>
        </header>
        </>
    )
}

export default HomeHeader