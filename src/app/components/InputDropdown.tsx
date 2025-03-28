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
        className='flex items-center gap-2 w-full h-full pl-2 pr-3 border-2 border-primary-500 rounded-xl cursor-pointer'
        onClick={handleToggleOptions}
      >
        <div className='p-1 rounded-lg'>
          <Image 
            src="/icons/link.svg"
            alt='Link'
            width={24}
            height={24}
          />
        </div>
        <p className="overflow-hidden flex-1 line-clamp-1 text-start text-ellipsis">
          {value ? value : placeholder}
        </p>
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
        <ul className='absolute overflow-auto top-full w-full max-h-52 mt-2 bg-white border-2 border-surface-600 rounded-xl'>
          {
            options.map((option, i) => (
              <li 
                key={i} 
                className='overflow-hidden py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'
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