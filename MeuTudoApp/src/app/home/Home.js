import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './constants/routes'
import Header from '../common/components/Header'
import homeResource from './services/homeResource'
import { setOpportunitiesData, setOptionsData, setPeriodData, setValuesData } from '~/store/actions/homeActions'
import { useDispatch } from 'react-redux'

const options = {
  header: ({ route, navigation, options }) => <Header options={options} navigation={navigation} route={route}/>,
}

const { Navigator, Screen } = createNativeStackNavigator()

const Home = ({}) => {
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const margins = await homeResource.margins()
      const suggestedValues = await homeResource.suggestedValues()
      const suggestedPeriods = await homeResource.suggestedPeriods()
      const simulation = await homeResource.simulation()
      
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
    <Navigator screenOptions={options} initialRouteName={routes[0]}>
      {routes.map(route => 
        <Screen key={route.name} name={route.name} component={route.component} options={{ title: route.label }}/>  
      )}
    </Navigator>
  )
}

export default Home