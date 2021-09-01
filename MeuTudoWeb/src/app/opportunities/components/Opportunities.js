import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import opportunitiesResource from '../services/opportunitiesResource'
import { setOpportunitiesData, setValuesData, setPeriodData, setOptionsData } from 'store/actions/opportunitiesActions'
import steps from '../constants/steps'
import Home from './Home'
import Value from './Value'
import Period from './Period'
import Simulation from './Simulation'

const Opportunities = ({ }) => {
  const [currentStep, setCurrentStep] = useState(steps.SELECT_LOAN)

  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const margins = await opportunitiesResource.margins()
      const suggestedValues = await opportunitiesResource.suggestedValues()
      const suggestedPeriods = await opportunitiesResource.suggestedPeriods()
      const simulation = await opportunitiesResource.simulation()
      
      dispatch(setOpportunitiesData(margins.data))
      dispatch(setValuesData(suggestedValues.data))
      dispatch(setPeriodData(suggestedPeriods.data))
      dispatch(setOptionsData(simulation.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="opportunities">
      { currentStep === steps.SELECT_LOAN && <Home setCurrentStep={setCurrentStep}/> }
      { currentStep === steps.SELECT_VALUE && <Value setCurrentStep={setCurrentStep}/> }
      { currentStep === steps.SELECT_PERIOD && <Period setCurrentStep={setCurrentStep}/> }
      { currentStep === steps.FINISH_SIMULATION && <Simulation setCurrentStep={setCurrentStep}/> }
    </div>
  )
}

export default Opportunities