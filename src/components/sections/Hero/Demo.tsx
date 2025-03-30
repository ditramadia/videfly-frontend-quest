'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Label from '@/components/Label'
import DemoForm from './DemoForm';

interface DemoProps {
  setProcessId: (value: string) => void
}

const Demo = ({ setProcessId }: DemoProps) => {
  return (
    <>
      {/* Vignette */}
      <div className="hidden absolute md:block md:top-[-324px] xl:top-[-484px] md:right-[-444px] xl:right-[-600px] md:w-[768px] xl:w-[1120px] md:h-[768px] xl:h-[1120px]">
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
          <DemoForm setProcessId={setProcessId} />
        </div>
      </motion.div>
    </>
  )
}

export default Demo