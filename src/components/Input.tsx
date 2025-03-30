import React from 'react'

interface InputProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  prefix?: string;
}

const Input = ({ label, type, name, placeholder, prefix }: InputProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm'>{label}</label>
        <div className='flex gap-3'>
        {
          prefix && 
          <input 
            type={type ? type : 'text'}
            name={name}
            value={prefix}
            className='w-10 border-b-2 border-border placeholder:text-label-disable'
            readOnly
          />
        }
        <input 
          type="text" 
          placeholder={placeholder}
          className='w-full border-b-2 border-border outline-0 placeholder:text-label-disable'
        />
      </div>
    </div>
  )
}

export default Input