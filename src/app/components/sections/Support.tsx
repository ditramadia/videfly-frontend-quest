import Image from 'next/image'
import React from 'react'

const data = [
  {
    label: "Lazada",
    imageUrl: "/icons/lazada.svg" 
  },
  {
    label: "Blibli",
    imageUrl: "/icons/blibli.svg" 
  },
  {
    label: "Tokopedia",
    imageUrl: "/icons/tokopedia.svg" 
  },
  {
    label: "Shopee",
    imageUrl: "/icons/shopee.svg" 
  },
  {
    label: "Beauty Haul",
    imageUrl: "/icons/beauty-haul.svg" 
  },
  {
    label: "Sociolla",
    imageUrl: "/icons/sociolla.svg" 
  },
  {
    label: "Tiktok Shop",
    imageUrl: "/icons/tiktok-shop.svg" 
  },
]

const Support = () => {
  return (
    <div className='container-md flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-24'>
      <div>
        <p className='text-nowrap'>Paltform yang didukung:</p>
      </div>

      <div className='relative overflow-hidden'>
        <div className="absolute inset-0 z-10 [background-image:linear-gradient(to_right,white_0%,transparent_20%,transparent_80%,white_100%)]"></div>
        <div className='flex items-center gap-16 lg:gap-20 w-max'>
          {
            data.map((item, i) => (
              <div key={i} className='relative w-24 h-12 md:w-32 md:h-16'>
                <Image 
                  src={item.imageUrl}
                  alt={item.label}
                  fill
                  objectFit='container'
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Support