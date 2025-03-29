'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import tutorialSteps from '@/data/tutorial';

import Label from '@/components/Label';
import TutorialStep from '@/components/TutorialStep';

const Tutorial = () => {
  const MotionImage = motion.create(Image);

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
          <span className="bg-gradient-to-r text-primary-gradient">
            Dalam 3 Langkah Mudah!
          </span>
        </h2>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        {/* Tutorial Images */}
        <div className="lg:basis-1/2 flex items-center justify-center w-full aspect-4/3 p-2 md:p-12 bg-surface-500 border-1 border-border rounded-3xl">
          <div className="w-full h-full p-4 md:p-8 bg-white border-1 border-border rounded-2xl md:rounded-lg">
            <div className="relative w-full h-full">
              <AnimatePresence>
                <MotionImage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  src={tutorialSteps[activeStep].imageUrl}
                  alt={tutorialSteps[activeStep].imageAlt}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Tutorial Steps */}
        <div className="md:basis-1/2 flex flex-col gap-4 lg:gap-6">
          {tutorialSteps.map((step, i) => (
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
