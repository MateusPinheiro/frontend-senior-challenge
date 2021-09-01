import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContainer } from '~/styles/app'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import routes from './common/constants/routes'
import store from '~/store'
import { Provider } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import RNLocalize from 'react-native-localize'

moment.locale(RNLocalize.getLocales()[0].languageTag)
const Tab = createBottomTabNavigator()

const tabOptions = {
  headerShown: false,
  tabBarStyle: { height: 60, paddingTop: 10, paddingBottom: 10 },
  tabBarActiveTintColor: '#d22688',
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer>
          <Tab.Navigator screenOptions={tabOptions}>
            {
              routes.map(route => {
                return <Tab.Screen key={route.name} name={route.name} component={route.component} options={{
                  tabBarLabel: route.label,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name={route.icon} color={color} size={size} />
                  ),
                
                }}/>
              })
            }
          </Tab.Navigator>
        </AppContainer>
      </NavigationContainer>
    </Provider>
  )
}

export default App
