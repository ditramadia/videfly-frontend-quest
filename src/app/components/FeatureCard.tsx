import React, { FC, SVGProps } from 'react';
import Image from 'next/image';

import FeatureType from '@/app/types/feature-type';

interface FeatureCardProps {
  feature: FeatureType;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const FeatureCard = ({ feature, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="w-full h-full bg-card rounded-xl">
      <div className="relative w-full h-64">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-75% to-card to-95%"></div>
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          className="object-contain"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-6" />
          <h3 className="font-nunito font-bold text-lg">{feature.title}</h3>
        </div>
        <p className="text-paragraph">{feature.body}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
