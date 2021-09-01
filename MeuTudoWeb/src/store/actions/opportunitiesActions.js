const setOpportunitiesData = data => {
  return { type: 'SET_OPPORTUNITIES_DATA', opportunitiesData: data }
}

const setValuesData = data => {
  return { type: 'SET_VALUES_DATA', valuesData: data }
}

const setPeriodData = data => {
  return { type: 'SET_PERIOD_DATA', periodData: data }
}

const setOptionsData = data => {
  return { type: 'SET_OPTIONS_DATA', optionsData: data }
}

const setNewLoanData = data => {
  return { type: 'SET_NEW_LOAN_DATA', newLoanData: data }
}

const resetNewLoan = () => {
  return { type: 'RESET_NEW_LOAN' }
}

export {
  setOpportunitiesData,
  setValuesData,
  setPeriodData,
  setOptionsData,
  setNewLoanData,
  resetNewLoan
}