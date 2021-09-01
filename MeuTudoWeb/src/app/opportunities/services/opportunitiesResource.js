import resourceService from "app/common/services/resourceService"

const opportunitiesResource = resourceService('/', {
  margins: { url: 'margins' },
  suggestedValues: { url: 'suggestedvalues' },
  suggestedPeriods: { url: 'suggestedperiods' },
  simulation: { url: 'simulation' }
})

export default { 
  margins: opportunitiesResource.margins,
  suggestedValues: opportunitiesResource.suggestedValues,
  suggestedPeriods: opportunitiesResource.suggestedPeriods,
  simulation: opportunitiesResource.simulation 
}