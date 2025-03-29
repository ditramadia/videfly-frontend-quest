import React from 'react';

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
              title="Buat Video dari URL"
              body="Cukup masukkan tautan produk atau bisnismu, dan Videfly akan otomatis mengambil informasi serta menghasilkan video siap pakai."
              imageSrc="/images/feature-1.png"
              imageAlt='Buat video dari URL'
              icon={LinkIcon}
            />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2">
            <FeatureCard
              title="Template Siap Pakai"
              body="Tak perlu mendesain dari nol! Gunakan beragam template yang bisa langsung disesuaikan dengan kebutuhan bisnismu."
              imageSrc="/images/feature-2.png"
              imageAlt='Template siap pakai'
              icon={TemplateIcon}
            />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 p-1 md:p-2">
            <FeatureCard
              title="Edit Cepat & Fleksibel"
              body="Sesuaikan konten dengan mudah menggunakan Quick Edit. Ubah gambar, musik, atau elemen lainnya tanpa keahlian editing."
              imageSrc="/images/feature-3.png"
              imageAlt='Edit cepat & fleksibel'
              icon={EditIcon}
            />
          </div>
          <div className="basis-full md:basis-1/2 p-1 md:p-2">
            <FeatureCard
              title="Analisis & Rekomendasi Cerdas"
              body="Dapatkan insight performa video dengan Videfly Analytics, lengkap dengan saran improvement untuk konten yang lebih menarik dan efektif."
              imageSrc="/images/feature-4.png"
              imageAlt='Analisis & rekomendasi cerdas'
              icon={ChartIcon}
            />
          </div>
          <div className="basis-full lg:basis-1/2 lg:w-1/2 p-1 md:p-2">
            <FeatureCard
              title="Jadwalkan & Posting Otomatis"
              body="Hemat waktu dengan integrasi media sosial! Langsung jadwalkan dan publikasikan kontenmu ke berbagai platform tanpa perlu pindah aplikasi."
              imageSrc="/images/feature-5.png"
              imageAlt='Jadwalkan & posting otomatis'
              icon={CalendarIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
