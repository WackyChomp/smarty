import React from 'react'
import { Label } from '../ui/label'
import { Controller } from 'react-hook-form'
import { Select, SelectTrigger, SelectValue } from '../ui/select'

const SelectField = ({ name, label, placeholder, options, control, error, required = false}: SelectFieldProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name}>{label}</Label>
      <Controller 
        name={name}
        control={control}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render = {({ field }) => (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Theme'/>
            </SelectTrigger>
          </Select>
        )}
      />
    </div>
  )
}

export default SelectField