import React from 'react'
import { cn } from '@/lib/utils'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const InputField = ({ name, label, placeholder, type='text', register, error, disabled, value, validation} : FormInputProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input 
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn('',{'opacity-50 cursor-not-allowed' : disabled})}
        {...register(name, validation)}
      />

      {error && <p className='text-red-500 text-sm'>{error.message}</p>}
    </div>
  )
}

export default InputField