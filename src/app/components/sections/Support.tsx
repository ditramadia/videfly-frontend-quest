import Image from 'next/image';
import React from 'react';

import supportedBy from '@/app/data/support';

const Support = () => {
  return (
    <div
      id="support"
      className="container-md flex flex-col md:flex-row md:items-center pt-8 gap-4 md:gap-8 lg:gap-24"
    >
      <div>
        <p className="text-paragraph text-nowrap">Paltform yang didukung:</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 [background-image:linear-gradient(to_right,white_0%,transparent_20%,transparent_80%,white_100%)]"></div>
        <div className="flex items-center gap-16 lg:gap-20 w-max">
          {supportedBy.map((item, i) => (
            <div key={i} className="relative w-24 h-12 md:w-32 md:h-16">
              <Image
                src={item.imageUrl}
                alt={item.label}
                fill
                objectFit="container"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
