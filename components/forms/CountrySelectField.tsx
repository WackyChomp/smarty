import React, { useMemo} from 'react'
import { useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelectField = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return (
    <div>
      CountrySelectField
      <Select options={options} value={value} onChange={changeHandler} />
    </div>
  )
}

export default CountrySelectField