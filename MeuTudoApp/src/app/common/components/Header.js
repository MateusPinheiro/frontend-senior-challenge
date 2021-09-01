import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import {
  HeaderContainer,
  Logo,
  Text,
  HeaderInfo,
  SideContainer,
  Title,
  AvailableValue,
  HeaderIcon,
  CollapseIconView,
} from '~/styles/common/header'

const Header = ({ navigation, route, options }) => {
  const [collapsed, setCollapsed] = useState(true)
  const margins = useSelector(state => state.home.opportunitiesData)
  
  return (
    <HeaderContainer>
      <SideContainer>
        {route.name === 'Opportunities' ? 
          <Logo source={require('~/assets/tudo-logo-120.png')}/> : 
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <HeaderIcon name="arrow-left" color="#ffffff" size={30} />
          </TouchableWithoutFeedback>
        }
      </SideContainer>
      {route.name === 'Opportunities' ?
        <HeaderInfo>
          <Title>Olá, José Carlos</Title>
          <Text>Seu crédito disponível é de</Text>
          <AvailableValue>R$ {margins.totalMaxValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</AvailableValue>
        </HeaderInfo> :
        <HeaderInfo onlyTitle={true}>
          <Title>{options.title}</Title>
        </HeaderInfo>
      }
      <SideContainer rigthSide={true}>
        {route.name === 'Opportunities' && <HeaderIcon name="bell-outline" color="#ffffff" size={30} />}
      </SideContainer>
      {/* <CollapseIconView onPress={() => setCollapsed(!collapsed)}>
        <Icon
          name={collapsed ? 'chevron-down' : 'chevron-up'}
          color="#ffffff"
          size={30}
        />
      </CollapseIconView> */}
    </HeaderContainer>
  )
}

export default Header
