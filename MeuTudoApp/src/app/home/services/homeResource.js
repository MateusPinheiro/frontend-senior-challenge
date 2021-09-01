import resourceService from '~/app/common/services/resourceService'

const homeResource = resourceService('/', {
  margins: { url: 'margins' },
  suggestedValues: { url: 'suggestedvalues' },
  suggestedPeriods: { url: 'suggestedperiods' },
  simulation: { url: 'simulation' }
})

export default { 
  margins: homeResource.margins,
  suggestedValues: homeResource.suggestedValues,
  suggestedPeriods: homeResource.suggestedPeriods,
  simulation: homeResource.simulation 
}