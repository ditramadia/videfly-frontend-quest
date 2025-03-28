import React from 'react'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  body: string
  imageSrc: string
}

const FeatureCard = ({ title, body, imageSrc }: FeatureCardProps) => {
  return (
    <div className='w-full h-full bg-surface-500 rounded-xl'>
      <div className='relative w-full h-64'>
        <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-75% to-[#f5f5f9] to-90%'></div>
        <Image 
          src={imageSrc}
          alt='Feature 1'
          fill
          objectFit='contain'
        />
      </div>

      <div className='mt-3 p-6'>
        <div className='mb-3'>
          <h3 className='font-nunito font-bold text-lg'>{title}</h3>
        </div>
        <p className='text-paragraph'>{body}</p>
      </div>
    </div>
  )
}

export default FeatureCard