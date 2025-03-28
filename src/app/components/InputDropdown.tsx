"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface InputDropdownProps {
  options: string[]
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const InputDropdown = ({ options, placeholder, value, onChange }: InputDropdownProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggleOptions = () => {
    setIsOptionsOpen((prev) => !prev)
  }

  const handleSelectOption = (option: string) => {
    onChange(option)
    setIsOptionsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOptionsOpen(false)
      }
    }

    if (isOptionsOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOptionsOpen])

  return (
    <div ref={dropdownRef} className='relative w-full h-full'>
      <button 
        className='flex items-center gap-2 w-full h-full pr-2 pl-3 border-2 border-primary-500 rounded-xl cursor-pointer'
        onClick={handleToggleOptions}
      >
        <div className='hidden lg:block'>
          <Image 
            src="/icons/link.svg"
            alt='Link'
            width={24}
            height={24}
          />
        </div>
        <div className='flex-1'>
          <input 
            type="text"
            className='w-full outline-0 cursor-pointer' 
            value={value} 
            placeholder={placeholder} 
            readOnly/>
        </div>
        <div>
          <Image 
            src="/icons/caret-down.svg"
            alt='Caret down'
            width={24}
            height={24}
          />
        </div>
      </button>

      {
        isOptionsOpen &&
        <ul className='absolute overflow-y-auto w-full max-h-32 xl:max-h-52 mt-2 bg-white border-2 border-surface-600 rounded-xl'>
          {
            options.map((option, i) => (
              <li 
                key={i} 
                className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default InputDropdown