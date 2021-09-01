const HOME_STATE_DEFAULT = {
  opportunitiesData: {
    creditCardMaxValue: 0,
    loanMaxValue: 0,
    portabilityMaxValue: 0,
    refinanceMaxValue: 0,
    totalMaxValue: 0
  },
  valuesData: { suggestedValues: [] },
  periodData: { suggestedInstallments: [] },
  optionsData: {},
  newLoanData: {}
}

export default function homeReducer(state = HOME_STATE_DEFAULT, action) {
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