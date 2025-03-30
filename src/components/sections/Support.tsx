'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import supportedBy from '@/data/support';

const Support = () => {
  return (
    <div
      id="support"
      className="container-md flex flex-col md:flex-row md:items-center pt-8 gap-4 md:gap-8 lg:gap-24"
    >
      <div>
        <p className="text-paragraph text-nowrap">Platform yang didukung:</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 [background-image:linear-gradient(to_right,white_0%,transparent_20%,transparent_80%,white_100%)]"></div>

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 80,
          }}
          className="flex items-center gap-16 lg:gap-20 w-max"
        >
          {[...supportedBy, ...supportedBy].map((item, i) => (
            <motion.div key={i} className="relative w-24 h-12 md:w-32 md:h-16">
              <Image
                src={item.imageUrl}
                alt={item.label}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
