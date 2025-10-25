import React from 'react'
import { Label } from '../ui/label'
import { Controller } from 'react-hook-form'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'

const SelectField = ({ name, label, placeholder, options, control, error, required = false}: SelectFieldProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='form_label'>{label}</Label>
      <Controller 
        name={name}
        control={control}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render = {({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className='select_trigger'>
              <SelectValue placeholder={placeholder}/>
            </SelectTrigger>
            <SelectContent className='bg-gray-950 border-gray-800 text-white'>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
    </div>
  )
}

export default SelectField