import React from 'react'
import Wrapper from '../Universal/Wrapper'
import Link from "next/link";


export default function HomePageNavBar() {
  return (
    <Wrapper className={"z-10 relative"}>
        <nav className="relative flex flex-col w-full items-center py-3 md:py-4 justify-center z-10">
          <div>
            <img
              className="w-[25px] md:w-[35px]"
              src="/images/Home Page/logoRavalbit.png"
              alt=""
            />
          </div>
          <div className="mt-3 md:mt-4 w-full max-w-[700px] flex justify-between">
            <Link className="text-white text-sm font-[200] uppercase font-[poppins]" href="/">
              Home
            </Link>
            <Link className="text-white text-sm font-[200] uppercase font-[poppins]" href="/">
              Services
            </Link>
            <Link className="text-white text-sm font-[200] uppercase font-[poppins]" href="/">
              Projects
            </Link>
            <Link className="text-white text-sm font-[200] uppercase font-[poppins]" href="/">
              Contact
            </Link>
            <Link className="text-white text-sm font-[200] uppercase font-[poppins]" href="/">
              About
            </Link>
          </div>
        </nav>
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/[.5]'>
            <span className='h-[3px] w-[3px] absolute left-0 top-[-1px] bg-white rounded-full'></span>
            <span className='h-[3px] w-[3px] absolute right-0 top-[-1px] bg-white rounded-full'></span>
        </div>

      </Wrapper>
  )
}
