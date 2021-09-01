import React from 'react'
import { useSelector } from 'react-redux'
import steps from '../constants/steps'

const Home = ({ setCurrentStep }) => {
  const marginsData = useSelector(({ opportunities }) => opportunities.opportunitiesData)

  return (
    <div className='home'>
      <div className='info'>
        <span className="title">Olá, Sr. José Carlos</span>
        <span className="description">Seu crédito disponível é de</span>
        <span className="value">R$ {marginsData.totalMaxValue.toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
      </div>
      <div className='available-loans'>
        <div className="card">
          <img src='assets/newLoan-2.png' className="image"/>
          <span className="title">Novo Empréstimo</span>
          <span className="value">Até R$ {marginsData.loanMaxValue.toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
          <span className="confirm-button" onClick={() => setCurrentStep(steps.SELECT_VALUE)}>Contratar <i className="fas fa-chevron-right"/></span>
        </div>
        <div className="card">
          <img src='assets/portability-2.png' className="image"/>
          <span className="title">Portabilidade</span>
          <span className="value">Até R$ {marginsData.portabilityMaxValue.toLocaleString(navigator.language, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
          <span className="confirm-button">Contratar <i className="fas fa-chevron-right"/></span>
        </div>
        <div className="card card__deactivated">
          <img src='assets/refinancing-2.png' className="image"/>
          <span className="title">Refinanciamento</span>
        </div>
        <div className="card card__deactivated">
          <img src='assets/creditCard-2.png' className="image"/>
          <span className="title">Cartão de crédito consignado</span>
        </div>
      </div>
    </div>
  )
}

export default Home