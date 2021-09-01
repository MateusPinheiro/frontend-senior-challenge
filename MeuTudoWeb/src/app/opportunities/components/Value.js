import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewLoanData } from 'store/actions/opportunitiesActions'
import steps from '../constants/steps'
import InputValue from './InputValue'

const Value = ({ setCurrentStep }) => {
  const [selectedValue, setSelectedValue] = useState()
  const [inputSelectedValue, setInputSelectedValue] = useState()

  const values = useSelector(({ opportunities }) => opportunities.valuesData.suggestedValues)
  const value = useSelector(({ opportunities }) => opportunities.newLoanData.value)
  const dispatch = useDispatch()

  const onContinue = () => {
    dispatch(setNewLoanData({ value: selectedValue || inputSelectedValue }))
    setCurrentStep(steps.SELECT_PERIOD)
  }

  useEffect(() => {
    if (values.includes(value))
      setSelectedValue(value)
    else
      setInputSelectedValue(value)
  }, [value])

  return (
    <div className='selection'>
      <div>
        <div className="title">De quanto você precisa?</div>
        <div className="values">
          {values.map((value, index) => 
            <div 
              key={index} 
              className={`card ${value === selectedValue ? 'card__selected' : ''}`} 
              onClick={() => {
                setInputSelectedValue()
                setSelectedValue(value)
              }}>
                R$ {value.toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
            </div>
          )}
        </div>
        <div className="flex align-center justify-center w-full m-t-lg">
          <span className="title m-r-md">Outro valor:</span>
          <InputValue 
            value={inputSelectedValue} 
            onChange={value => {
              setSelectedValue()
              setInputSelectedValue(value)
            }}
          />
        </div>
        <div className="flex align-center justify-center w-full">
          <span className="subtitle">Simule pela parcela</span>
        </div>
        <div className="flex justify-between w-full m-t-lg">
          <span className="confirm-button" onClick={() => setCurrentStep(steps.SELECT_LOAN)}><i className="fas fa-chevron-left"/> Voltar</span>
          <span className="confirm-button" onClick={onContinue}>Continuar <i className="fas fa-chevron-right"/></span>
        </div>
      </div>
    </div>
  )
}

export default Value