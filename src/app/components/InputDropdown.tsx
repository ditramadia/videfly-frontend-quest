import Image from 'next/image'
import React from 'react'

const InputDropdown = () => {
  return (
    <div className='relative w-full h-full'>
      <button className='flex items-center gap-2 w-full h-full pl-2 pr-3 border-2 border-primary-500 rounded-xl'>
        <div className='p-1 rounded-lg transition-150 hover:bg-surface-600 cursor-pointer'>
          <Image 
            src="/icons/link.svg"
            alt='Link'
            width={24}
            height={24}
          />
        </div>
        <div className='flex gap-2 w-full cursor-pointer'>
          <span className='flex-1 text-start truncate'>Pilih Link URL Product</span>
          <div>
            <Image 
              src="/icons/caret-down.svg"
              alt='Caret down'
              width={24}
              height={24}
            />
          </div>
        </div>
      </button>

      <ul className='absolute overflow-auto top-full w-full max-h-52 mt-2 border-2 border-surface-600 rounded-xl'>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 1</li>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 2</li>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 3</li>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 4</li>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 5</li>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 6</li>
        <li className='py-2 px-3 truncate cursor-pointer transition-150 hover:bg-surface-500'>Item 7</li>
      </ul>
    </div>
  )
}

export default InputDropdown