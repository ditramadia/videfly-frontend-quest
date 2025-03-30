import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prefix?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, prefix, value = "", ...rest } = props
  
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm'>{label}</label>
        <div className='flex gap-3'>
        {
          prefix && 
          <span className='pr-1 border-b-2 border-border placeholder:text-label-disable'>{prefix}</span>
        }
        <input 
          ref={ref}
          value={value}
          {...rest}
          className='w-full border-b-2 border-border outline-0 placeholder:text-label-disable'
        />
      </div>
    </div>
  )
})

Input.displayName = "input";

export default Input