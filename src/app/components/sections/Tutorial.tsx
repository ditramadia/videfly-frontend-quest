'use client';

import React, { useState } from 'react';
import Label from '@/app/components/Label';
import Image from 'next/image';
import TutorialStep from '../TutorialStep';

const stepData = [
  {
    title: 'Masukkan URL',
    body: 'Cukup tempelkan tautan produk atau bisnis Anda, dan sistem kami akan secara otomatis mengambil informasi penting untuk memulai.',
    imageUrl: '/images/tutorial-step-1.png',
    imageAlt: 'Something',
  },
  {
    title: 'Masukkan URL',
    body: 'Cukup tempelkan tautan produk atau bisnis Anda, dan sistem kami akan secara otomatis mengambil informasi penting untuk memulai.',
    imageUrl: '/images/tutorial-step-1.png',
    imageAlt: 'Something',
  },
  {
    title: 'Masukkan URL',
    body: 'Cukup tempelkan tautan produk atau bisnis Anda, dan sistem kami akan secara otomatis mengambil informasi penting untuk memulai.',
    imageUrl: '/images/tutorial-step-1.png',
    imageAlt: 'Something',
  },
];

const Tutorial = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleChangeStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div id="tutorial" className="container-md pt-8">
      <div className="flex flex-col items-center gap-8">
        <Label text="Tutorial" />
        <h2 className="font-nunito font-bold text-2xl md:text-3xl lg:text-4xl text-center leading-10 md:leading-12 lg:leading-14">
          Buat Konten Menarik Untuk Bisnismu <br />{' '}
          <span className="bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text">
            Dalam 3 Langkah Mudah!
          </span>
        </h2>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        <div className="lg:basis-1/2 flex items-center justify-center w-full h-64 md:h-[420px] p-2 md:p-12 bg-surface-500 border-1 border-[#E6E6E6] rounded-3xl">
          <div className="w-full h-full p-1 md:p-8 bg-white border-1 border-[#E6E6E6] rounded-2xl md:rounded-lg">
            <div className="relative w-full h-full">
              {stepData.map((step, i) => (
                <Image
                  className={`${i === activeStep ? '' : 'hidden'}`}
                  key={i}
                  src={step.imageUrl}
                  alt={step.imageAlt}
                  fill
                  objectFit="contain"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:basis-1/2 flex flex-col gap-4 lg:gap-6">
          {stepData.map((step, i) => (
            <TutorialStep
              key={i}
              order={i + 1}
              title={step.title}
              body={step.body}
              active={activeStep === i}
              onClick={() => handleChangeStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
