import React from 'react'
import Image from 'next/image'

import Button from '@/components/Button'

const Result = () => {
  return (
    <>
      {/* Spinner */}
      <div></div>

      {/* Vignette */}
      <div></div>

      <div className='w-11/12 md:w-full mx-auto md:mx-0 mt-12 md:mt-0'>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='font-nunito text-center font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-start leading-12 md:leading-14 lg:leading-16'>Videomu Sudah Siap!</h2>
            <p className='text-balance text-center text-paragraph'>Yuk, coba jadwalkan demo untuk bikin video tanpa batas dengan semua fitur lengkap. Butuh yang lebih fleksibel? Lihat paket harga yang sesuai dengan kebutuhanmu!</p>
          </div>

          <div className='flex gap-4'>
            <div className='h-11 transition-150 hover:scale-105 active:scale-95'>
              <Button text='Lihat Pricing' color='primaryOutline' border/>
            </div>
            <div className='h-11 transition-150 hover:scale-105 active:scale-95'>
              <Button text='Jadwalkan Demo' color='primary'/>
            </div>
          </div>
        </div>

        <div className='relative max-w-[800px] w-full mx-auto top-12 aspect-video'>
          <Image 
            src="/images/hero-result.webp"
            alt="Mockup marketing produk Limerush Sparkling Energy Drink"
            className="object-contain"
            fill
            sizes="(max-width: 1025px) 50vw, 100vw"
            priority
          />
        </div>
      </div>

    </>
  )
}

export default Result