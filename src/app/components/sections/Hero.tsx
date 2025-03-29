'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import urlSelection from '@/app/data/url-selection';

import Label from '@/app/components/Label';
import Button from '@/app/components/Button';
import InputDropdown from '@/app/components/InputDropdown';

const Hero = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleAnalyze = () => {
    // Handle analyze here
    // console.log('Analyzing:', selectedValue);
  };

  return (
    <div className="flex justify-center items-center md:py-16 lg:py-28 bg-white md:bg-gradient-to-br md:from-[#7261EF] md:via-[#B9AFF7] md:to-[#F1EDFD]">
      <div className="overflow-hidden md:relative md:max-w-[1200px] w-full md:w-11/12 md:min-h-[450px] py-12 md:px-10 bg-white md:rounded-3xl">
        {/* Vignette */}
        <div className="hidden md:block md:absolute md:top-[-324px] xl:top-[-484px] md:right-[-444px] xl:right-[-600px] md:w-[768px] xl:w-[1120px] md:h-[768px] xl:h-[1120px]">
          <Image
            src="/icons/hero-vignette.svg"
            alt="Purple ellipse vignette"
            fill
            className='object-contain'
            priority
          />
        </div>

        {/* Hero Image */}
        <div className="relative md:absolute md:inset-y-0 md:-right-12 w-full md:w-1/2 h-72 md:h-full">
          <Image
            src="/images/hero-mockup.png"
            alt="Mockup marketing produk Limerush Sparkling Energy Drink"
            fill
            className='object-contain'
            priority
          />
        </div>

        {/* Main Content */}
        <div className="w-11/12 md:w-1/2 mx-auto md:mx-0 mt-12 md:mt-0 @container">
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

          <div className="flex flex-col @sm:flex-row gap-2 mt-8 mb-12 @sm:mt-16 @sm:mb-32 @md:mt-24 @lg:mb-56">
            <div className="@sm:flex-1 h-11">
              <InputDropdown
                options={urlSelection}
                placeholder="Pilih Link URL Product"
                value={selectedValue}
                onChange={setSelectedValue}
              />
            </div>
            <div className="h-11 transition-150 hover:scale-105">
              <Button text="Analisa" color="primary" onClick={handleAnalyze} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
