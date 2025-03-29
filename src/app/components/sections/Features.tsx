'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'

import features from '@/app/data/features';

import LinkIcon from '@public/icons/link.svg';
import TemplateIcon from '@public/icons/template.svg';
import EditIcon from '@public/icons/edit.svg';
import ChartIcon from '@public/icons/chart.svg';
import CalendarIcon from '@public/icons/calendar.svg';

import Label from '@/app/components/Label';
import FeatureCard from '@/app/components/FeatureCard';

const Features = () => {
  const cardContainerRef = useRef(null)
  const isInView = useInView(cardContainerRef, { once: true })

  return (
    <div id="features" className="container-md pt-8">
      <div className="flex flex-col items-center gap-8">
        <Label text="Features" />
        <h2 className="font-nunito font-bold text-2xl md:text-3xl lg:text-4xl text-center leading-10 md:leading-12 lg:leading-14">
          Bagaimana Videfly Membantu Bisnismu? <br />{' '}
          <span className="bg-gradient-to-r text-primary-gradient">
            Lebih Efisien, Lebih Mudah, Hasil Maksimal!
          </span>
        </h2>
      </div>

      <div ref={cardContainerRef} className="overflow-hidden mt-16">
        <div className="flex flex-wrap">
          <motion.div
            initial={{ x: "-350%"}}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}
            className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2"
          >
            <FeatureCard feature={features[0]} icon={LinkIcon} />
          </motion.div>
          <motion.div 
            initial={{ x: "-350%"}}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}
            className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2"
          >
            <FeatureCard feature={features[1]} icon={TemplateIcon} />
          </motion.div>
          <motion.div 
            initial={{ x: "-350%"}}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}
            className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2"
          >
            <FeatureCard feature={features[2]} icon={EditIcon} />
          </motion.div>
          <motion.div 
            initial={{ x: "250%"}}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}
            className="basis-full md:basis-1/2 p-1 md:p-2"
          >
            <FeatureCard feature={features[3]} icon={ChartIcon} />
          </motion.div>
          <motion.div 
            initial={{ x: "250%"}}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1.5, ease:  "easeInOut" }}
            className="basis-full lg:basis-1/2 lg:w-1/2 p-1 md:p-2"
          >
            <FeatureCard feature={features[4]} icon={CalendarIcon} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
