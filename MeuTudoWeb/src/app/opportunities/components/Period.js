import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewLoanData } from 'store/actions/opportunitiesActions'
import steps from '../constants/steps'
import InputValue from './InputValue'

const Period = ({ setCurrentStep }) => {
  const [selectedValue, setSelectedValue] = useState()
  const [inputSelectedValue, setInputSelectedValue] = useState()

  const values = useSelector(({ opportunities }) => opportunities.periodData.suggestedInstallments)
  const period = useSelector(({ opportunities }) => opportunities.newLoanData.period)
  const dispatch = useDispatch()

  const onContinue = () => {
    dispatch(setNewLoanData({ period: selectedValue || inputSelectedValue }))
    setCurrentStep(steps.FINISH_SIMULATION)
  }

  useEffect(() => {
    if (values.includes(period))
      setSelectedValue(period)
    else
      setInputSelectedValue(period)
  }, [period])

  return (
    <div className='selection'>
      <div>
        <div className="title">Em quanto tempo você quer pagar?</div>
        <div className="values">
          {values.map((value, index) => 
            <div 
              key={index} 
              className={`card ${value === selectedValue ? 'card__selected' : ''}`} 
              onClick={() => {
                setSelectedValue(value)
                setInputSelectedValue()
              }}>
              {value.toLocaleString(navigator.language)}
            </div>
          )}
        </div>
        <div className="flex align-center justify-center w-full m-t-lg">
          <InputValue
            value={inputSelectedValue} 
            onChange={value => {
              setSelectedValue()
              setInputSelectedValue(value)
            }}
            isMonth={true}
          />
          <span className="title m-l-md">meses</span>
        </div>
        <div className="flex justify-between w-full m-t-lg">
          <span className="confirm-button" onClick={() => setCurrentStep(steps.SELECT_VALUE)}><i className="fas fa-chevron-left"/> Voltar</span>
          <span className="confirm-button" onClick={onContinue}>Continuar <i className="fas fa-chevron-right"/></span>
        </div>
      </div>
    </div>
  )
}

export default Period