import React from 'react';

import features from '@/app/data/features';

import LinkIcon from '@public/icons/link.svg'
import TemplateIcon from '@public/icons/template.svg'
import EditIcon from '@public/icons/edit.svg'
import ChartIcon from '@public/icons/chart.svg'
import CalendarIcon from '@public/icons/calendar.svg'

import Label from '@/app/components/Label';
import FeatureCard from '@/app/components/FeatureCard';

const Features = () => {
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

      <div className="mt-16">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2">
            <FeatureCard
              feature={features[0]}
              icon={LinkIcon}
            />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2">
            <FeatureCard
              feature={features[1]}
              icon={TemplateIcon}
            />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2">
            <FeatureCard
              feature={features[2]}
              icon={EditIcon}
            />
          </div>
          <div className="basis-full md:basis-1/2 p-1 md:p-2">
            <FeatureCard
              feature={features[3]}
              icon={ChartIcon}
            />
          </div>
          <div className="basis-full lg:basis-1/2 lg:w-1/2 p-1 md:p-2">
            <FeatureCard
              feature={features[4]}
              icon={CalendarIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
