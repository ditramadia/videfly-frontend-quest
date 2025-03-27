import Image from 'next/image'
import React from 'react'

interface LabelProps {
  text: string
}

const Label = ({ text }: LabelProps) => {
  return (
    <div className='w-fit p-[1px] bg-gradient-to-r from-[#4C3199] to-[#7F52FF] rounded-full'>
      <div className='flex items-center gap-2 py-1 px-2 bg-white rounded-full'>
        <Image
          src='/icons/diamond-filled.svg'
          alt='Diamond icon'
          width={15}
          height={15}
        />
        <p className='text-sm text-primary-500'>{text}</p>
      </div>
    </div>
  )
}

export default Label