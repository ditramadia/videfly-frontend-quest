'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import urlSelection from '@/data/url-selection';

import Label from '@/components/Label'
import InputDropdown from '@/components/InputDropdown'
import Button from '@/components/Button'
import Input from '@/components/Input';

const Demo = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleAnalyze = () => {
    if (!selectedValue) return

    setIsFormOpen(true)
  };
  
  return (
    <>
      {/* Vignette */}
      <div className="hidden md:block md:absolute md:top-[-324px] xl:top-[-484px] md:right-[-444px] xl:right-[-600px] md:w-[768px] xl:w-[1120px] md:h-[768px] xl:h-[1120px]">
          <Image
            src="/icons/hero-vignette.svg"
            alt="Purple ellipse vignette"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 0vw, 50vw"
            priority
          />
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ x: '120%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="relative md:absolute md:inset-y-0 md:-right-12 w-full md:w-1/2 h-72 md:h-full"
        >
          <Image
            src="/images/hero-mockup.webp"
            alt="Mockup marketing produk Limerush Sparkling Energy Drink"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ x: '-120%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="w-11/12 md:w-1/2 mx-auto md:mx-0 mt-12 md:mt-0 @container"
        >
          <div className="flex flex-col items-center md:items-start gap-4">
            <Label text="Live Demo" />
            <h1 className="font-nunito font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-start leading-12 md:leading-14 lg:leading-16">
              Coba Fitur URL to Video <br />
              <span className="bg-gradient-to-r text-primary-gradient">
                Tanpa Biaya!
              </span>
            </h1>
            <p className="text-balance text-center md:text-left text-paragraph">
              Masukkan URL, ubah jadi video dalam hitungan detik. <br /> Mudah
              dan gratis!
            </p>
          </div>

          <div className='max-w-[500px] md:max-w-[800px] mx-auto md:mx-0 mt-8 @sm:mt-12 @md:mt-16 @lg:mt-24'>
            {
              isFormOpen 
              ?
              <form className='flex flex-col items-center gap-6'>
                <div className='w-full flex flex-col gap-4'>
                  <div>
                    <Input label='Nama' placeholder='Contoh: John Doe' />
                  </div>
                  <div>
                    <Input label='Email' placeholder='nama@email.com' />
                  </div>
                  <div>
                    <Input label='Nomor Telepon' prefix='+62' />
                  </div>
                </div> 

                <div className={`w-44 h-11 transition-150 ${selectedValue ? 'hover:scale-105' : ''} `}>
                  <Button text="Kirim" color="primary" />
                </div>
              </form> 
              :
              <div className='flex flex-col @sm:flex-row gap-2 mb-12 @sm:mb-32 @lg:mb-56'>
                <div className="@sm:flex-1 h-11">
                  <InputDropdown
                    options={urlSelection}
                    placeholder="Pilih Link URL Product"
                    value={selectedValue}
                    onChange={setSelectedValue}
                  />
                </div>
                <div className={`h-11 transition-150 ${selectedValue ? 'hover:scale-105' : ''} `}>
                  <Button text="Analisa" color="primary" disabled={!selectedValue} onClick={handleAnalyze} />
                </div>
              </div>
            }
          </div>
        </motion.div>
    </>
  )
}

export default Demo