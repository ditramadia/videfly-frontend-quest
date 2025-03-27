import React from 'react'
import Image from "next/image"
import Link from 'next/link'

import Button from './Button'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center container py-3">
      <div>
        <Image 
          src="/icons/videfly-logo-white-bg-transparent-1.svg"
          alt="Videfly logo"
          width={100}
          height={100}
        />
      </div>

      <div className='flex gap-6 items-center'>
        <Link href='/auth/login'>
          <div className='hover:scale-105 transition-150'>
            <Button text='Masuk' color='gray' border bold />
          </div>
        </Link>
        
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