import React from 'react'
import { useSelector } from 'react-redux'
import steps from '../constants/steps'
import moment from 'moment'

const Simulation = ({ setCurrentStep }) => {
  const simulation = useSelector(({ opportunities }) => opportunities.optionsData)

  return (
    <div className='selection'>
      <div>
        <div className="title">Escolha um banco.</div>
        <div className="simulation-card">
          <div className="simulation-card__top">
            <div className="simulation-card__top-left">
              <div className="logo">
                <img src="assets/tudo-logo-120.png"/>
              </div>
              <div className="info">
                <span className="title">{simulation.numberOfInstallments} parcelas de</span>
                <span className="value">R$ {simulation.installmentsValue.toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
                <span className="subtitle">Total de R$ {simulation.contractValue.toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className="simulation-card__top-right">
              <span>com taxa de</span>
              <span>{(simulation.effectiveRate * 100).toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}% a.m.</span>
            </div>
          </div>
          <div className="simulation-card__bottom">
            <span>Previsão de pagamento <i className="far fa-question-circle m-l-sm"/></span>
            <span>{moment().add(simulation.numberOfInstallments, 'months').format('LL')}</span>
            <span className="confirm-button" onClick={() => setCurrentStep(steps.SELECT_LOAN)}>Contratar <i className="fas fa-chevron-right"/></span>
          </div>
        </div>
        <div className="flex justify-between w-full m-t-lg">
          <span className="confirm-button" onClick={() => setCurrentStep(steps.SELECT_PERIOD)}><i className="fas fa-chevron-left"/> Voltar</span>
        </div>
      </div>
    </div>
  )
}

export default Simulation