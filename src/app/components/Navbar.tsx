import React from 'react'
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center container py-4">
      <div>
        <Image 
          src="/icons/videfly-logo-white-bg-transparent-1.svg"
          alt="Videfly logo"
          width={100}
          height={100}
        />
      </div>

      <div className='flex gap-6 items-center'>
        <div>
        </div>
        <div className="flex flex-col gap-[6px] cursor-pointer">
          <div className="w-6 h-[2px] bg-paragraph rounded-full"></div>
          <div className="w-6 h-[2px] bg-paragraph rounded-full"></div>
          <div className="w-6 h-[2px] bg-paragraph rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar