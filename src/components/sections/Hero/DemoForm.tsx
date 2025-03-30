import React, { useState } from 'react'
import Link from 'next/link';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import urlSelection from '@/data/url-selection';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputDropdown from '@/components/InputDropdown';

interface DemoFormProps {
  setProcessId: (value: string) => void
}

const demoFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone number must contain only digits"),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
})

type DemoFormSchema = z.infer<typeof demoFormSchema>

const DemoForm = ({ setProcessId }: DemoFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<DemoFormSchema>({
    resolver: zodResolver(demoFormSchema)
  })

  const [step, setStep] = useState<number>(1)
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleNextStep = () => {
    if (!selectedValue) return

    setStep((prev) => prev += 1)
  };

  const onSubmit = (data: DemoFormSchema) => {
    console.log('Data', data)
    setProcessId('6ff5c435-168c-4d9a-82c9-315f56545d25')
  }

  return (
    <>
    {
      step === 1 &&
      <div className='flex flex-col @sm:flex-row gap-2 mb-12 @sm:mb-32 @lg:mb-56'>
      <div className="@sm:flex-1 h-11">
        <InputDropdown
          options={urlSelection}
          placeholder="Pilih Link URL Product"
          value={selectedValue}
          onChange={setSelectedValue}
        />
      </div>
      <div className={`h-11 transition-150 ${selectedValue ? 'hover:scale-105 active:scale-95' : ''} `}>
        <Button text="Analisa" color="primary" disabled={!selectedValue} onClick={handleNextStep} />
      </div>
    </div> 
    }
    {
      step === 2 &&
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center md:items-start gap-6 lg:gap-8'>
        <div className='w-full flex flex-col gap-4 lg:gap-6'>
          <div className='basis-1'>
            <Controller 
              name="name"
              control={control}
              render={({ field }) => (
                <Input label='Nama' {...field} placeholder='Contoh: John Doe' />
              )}
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-6'>
            <div className='basis-1 lg:basis-1/2'>
              <Controller 
                name="email"
                control={control}
                render={({ field }) => (
                  <Input label='Email' type='email' {...field} placeholder='nama@email.com' />
                )}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className='basis-1 lg:basis-1/2'>
              <Controller 
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input label='Nomor Telepon' {...field} prefix='+62' />
                )}
              />
              {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
          </div>
        </div> 

        <div>
          <div className='flex gap-3 items-start'>
            <input 
              type="checkbox" 
              className='mt-1' 
              {...register("terms")}
            />
            <p>Dengan mendaftar, saya menyatakan telah membaca dan menyetujui 
              <Link href='/terms-and-conditions' className='text-primary-500'> Syarat dan Ketentuan</Link> dan 
              <Link href='/privacy-policy' className='text-primary-500'> Kebijakan Privasi</Link> Videfly</p>
          </div>
          {errors.terms && <p className="mt-1 text-red-500 text-sm">{errors.terms.message}</p>}
        </div>

        <div className={`w-44 h-11 mt-4 transition-150 ${isValid ? 'hover:scale-105 active:scale-95' : ''}`}>
          <Button type="submit" text="Kirim" color="primary" disabled={!isValid} />
        </div>
      </form>
    }
    </>
  )
}

export default DemoForm