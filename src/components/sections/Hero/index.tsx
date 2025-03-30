'use client'

import React, { useState } from 'react';

import Demo from './Demo';
import Result from './Result';

const Hero = () => {
  const [processId, setProcessId] = useState<string>('')

  return (
    <div className="flex justify-center items-center md:py-16 lg:py-28 bg-white md:bg-gradient-to-br md:from-[#7261EF] md:via-[#B9AFF7] md:to-[#F1EDFD]">
      <div className="overflow-hidden md:relative md:max-w-[1200px] w-full md:w-11/12 min-h-[700px] md:min-h-[720px] py-12 md:px-10 bg-white md:rounded-3xl">
        {
          processId ?
          <Result /> :
          <Demo setProcessId={setProcessId}/>
        }
      </div>
    </div>
  );
};

export default Hero;
