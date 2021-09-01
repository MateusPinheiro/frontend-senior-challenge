const OPPORTUNITIES_STATE_DEFAULT = {
  opportunitiesData: {
    loanMaxValue: 6432.29,
    totalMaxValue: 7851.83,
    portabilityMaxValue: 1419.54,
    creditCardMaxValue: 0,
    refinanceMaxValue: 0
  },
  valuesData: {
    minValue: 200,
    maxValue: 6432.2917,
    suggestedValues: [200, 2270, 4350, 6432.2917]
  },
  periodData: {
    minValue: 6,
    maxValue: 84,
    suggestedInstallments: [6, 32, 58, 84]
  },
  optionsData: {
    contractValue: 200,
    installmentsValue: 4.0704,
    numberOfInstallments: 84,
    iofValue: 6.337974269763037,
    insuranceValue: 0,
    totalEffectiveCost: 0.18113572054289573,
    nominalRate: 0.0129,
    annualNominalRate: 0.166269326495,
    effectiveRate: 0.013969714689,
    financialInstitution: {
      id: 1000,
      name: 'Meu Tudo',
      bankNumber: '326'
    }
  },
  newLoanData: {}
}

export default function opportunitiesReducer(state = OPPORTUNITIES_STATE_DEFAULT, action) {
  switch (action.type) {
    case 'SET_OPPORTUNITIES_DATA':
      return { ...state, opportunitiesData: { ...state.opportunitiesData, ...action.opportunitiesData } }
    case 'SET_VALUES_DATA':
      return { ...state, valuesData: { ...state.valuesData, ...action.valuesData } }
    case 'SET_PERIOD_DATA':
      return { ...state, periodData: { ...state.periodData, ...action.periodData } }
    case 'SET_OPTIONS_DATA':
      return { ...state, optionsData: { ...state.optionsData, ...action.optionsData } }
    case 'SET_NEW_LOAN_DATA':
      return { ...state, newLoanData: { ...state.newLoanData, ...action.newLoanData } }
    case 'RESET_NEW_LOAN':
      return { ...state, newLoanData: { } }
    default:
      return state
  }
}