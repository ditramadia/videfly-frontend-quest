import React from 'react';
import Link from 'next/link';

import ArrowRightFilledIcon from '@public/icons/arrow-right-filled.svg';

import Button from '@/app/components/Button';

const Pricing = () => {
  return (
    <div id="pricing" className="container-md pt-8">
      <div className="w-full px-4 py-6 md:py-10 lg:py-12 bg-white border-1 border-border rounded-3xl drop-shadow-[0_8px_80px_var(--color-shadow)]">
        <div className="flex flex-col items-center text-center text-balance gap-4 lg:gap-6">
          <h2 className="font-nunito font-bold text-2xl md:text-3xl lg:text-4xl leading-10 md:leading-12 lg:leading-14">
            Lebih Produktif, Lebih Untung, Lebih Hemat!
          </h2>
          <p className="text-paragraph">
            Jangan tunggu lagi! Buat video pakai Videfly sekarang, biar cepat,
            untung besar, dan hemat!
          </p>
          <div className="w-44 mt-3 transition-150 hover:scale-105">
            <Link href="/auth/login">
              <Button
                text="Buat Video"
                icon={ArrowRightFilledIcon}
                color="gradient"
                bold
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-stretch md:justify-between gap-12 md:gap-8 w-full mx-auto">
          <div className="flex flex-col gap-4 lg:gap-16 items-center basis-1/3 md:py-4 text-center">
            <h3 className="font-nunito text-7xl lg:text-8xl text-center font-bold">
              <span className="bg-gradient-to-br text-primary-gradient">
                70
              </span>
              <span className="bg-gradient-to-br text-primary-gradient">%</span>
            </h3>
            <p className="text-paragraph font-medium">
              Produktivitas Meningkat
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-label-disable rounded-full"></div>
          <div className="flex flex-col gap-4 lg:gap-16 items-center basis-1/3 md:py-4 text-center">
            <h3 className="font-nunito text-7xl lg:text-8xl text-center font-bold">
              <span className="bg-gradient-to-br text-primary-gradient">
                50
              </span>
              <span className="bg-gradient-to-br text-primary-gradient">%</span>
            </h3>
            <p className="text-paragraph font-medium">Kenaikan ROI</p>
          </div>
          <div className="hidden md:block w-[1px] bg-label-disable rounded-full"></div>
          <div className="flex flex-col gap-4 lg:gap-16 items-center basis-1/3 md:py-4 text-center">
            <h3 className="font-nunito text-7xl lg:text-8xl text-center font-bold">
              <span className="bg-gradient-to-br text-primary-gradient">
                20
              </span>
              <span className="bg-gradient-to-br text-primary-gradient">x</span>
            </h3>
            <p className="text-paragraph font-medium">Lebih Hemat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
