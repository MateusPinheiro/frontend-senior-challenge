import React, { useEffect, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

const InputValue = ({ value, onChange, isMonth, ...rest }) => {
  const [formattedValue, setFormattedValue] = useState(value)

  const onChangeValue = value => {
    setFormattedValue(value)
    value && onChange(Number(value.replace(',', '.')))
  }

  useEffect(() => {
    setFormattedValue(value)
  }, [value])

  return isMonth ? 
    <CurrencyInput
      value={formattedValue}
      placeholder="00"
      groupSeparator='.'
      decimalSeparator=','
      allowDecimals={false}
      onValueChange={onChangeValue}
      className="input-value" 
      {...rest}
    />
    : 
    <CurrencyInput
      value={formattedValue}
      prefix="R$ "
      placeholder="R$ 00,00"
      groupSeparator='.'
      decimalSeparator=','
      onValueChange={onChangeValue}
      className="input-value"
      {...rest}
    />
  
}

export default InputValue