"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'

import navigationMenu from '../data/navigation-menu'

import Button from './Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="relative flex justify-between items-center md:gap-8 container py-3 md:py-4">
      <div>
        <Link href="/">
          <Image 
            src="/icons/videfly-logo-white-bg-transparent-1.svg"
            alt="Videfly logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <ul className='hidden flex-1 md:flex justify-around max-w-[642px]'>
        {
          navigationMenu.map((navItem, i) => (
            <li key={i} className='text-paragraph transition-150 hover:scale-105'>
              <Link href={navItem.url}>
                {navItem.label}
              </Link>
            </li>
          ))
        }
      </ul>

      <div className='flex items-center gap-4'>
        <div className='h-[42px] transition-150 hover:scale-105'>
          <Link href='/auth/login'>
            <Button text='Masuk' color='gray' border bold />
          </Link>
        </div>

        <div className='hidden md:block h-[42px] transition-150 hover:scale-105'>
          <Link href='/auth/register'>
            <Button text='Buat Video' color='gradient' border bold />
          </Link>
        </div>
        
        <div 
          className='md:hidden flex flex-col gap-[6px] cursor-pointer'
          onClick={handleToggleMenu}
        >
          <div className={`w-6 h-[2px] bg-paragraph rounded-full transition-150 ${isMenuOpen ? '-rotate-45 translate-y-[8px]' : ''}`}></div>
          <div className={`w-6 h-[2px] bg-paragraph rounded-full transition-150 ${isMenuOpen ? 'scale-0' : ''}`}></div>
          <div className={`w-6 h-[2px] bg-paragraph rounded-full transition-150 ${isMenuOpen ? 'rotate-45 translate-y-[-8px]' : ''}`}></div>
        </div>
      </div>
      {
        isMenuOpen &&
        <div className='md:hidden absolute top-[100%] inset-x-0 mt-4 bg-white p-2 pb-6 rounded-lg shadow-lg shadow-surface-600'>
          <ul className='flex flex-col items-center gap-2'>
            {
              navigationMenu.map((navItem, i) => (
                <li key={i} className='w-full py-2 px-2 rounded-sm text-center cursor-pointer transition-150 hover:bg-surface-500'>
                  <Link href={navItem.url}>
                    {navItem.label}
                  </Link>
                </li>
              ))
            }
            <li className='mt-2'>
              <div className='max-w-[300px] w-full transition-150 hover:scale-105'>
                <Link href='/auth/register'>
                  <Button text='Buat Video' color='gradient' />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      }
      
    </nav>
  )
}

export default Navbar