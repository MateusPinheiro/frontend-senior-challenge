import React from 'react'
import { useSelector } from 'react-redux'
import Card from '~/app/common/components/Card'
import { CardIcon, CardContainer, CardTitle, CardValue, HomeView, Title, TouchableHighlightCard, CardTitleView, styles } from '~/styles/home/home'

const Opportunities = ({ navigation }) => {
  const margins = useSelector(state => state.home.opportunitiesData)

  return (
    <HomeView >
      <Title>Oportunidades</Title>
      <CardContainer>
        <TouchableHighlightCard onPress={() => navigation.navigate('Values')}>
          <Card justifyContent='center'>
            <CardIcon source={require('~/assets/newLoan-2.png')}/>
            <CardTitleView>
              <CardTitle>Novo Empréstimo</CardTitle>
            </CardTitleView>
            <CardValue>Até R$ {margins.loanMaxValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</CardValue>
          </Card>
        </TouchableHighlightCard>
        <TouchableHighlightCard>
          <Card justifyContent='center'>
            <CardIcon source={require('~/assets/portability-2.png')}/>
            <CardTitleView>
              <CardTitle>Portabilidade</CardTitle>
            </CardTitleView>
            <CardValue>Até R$ {margins.portabilityMaxValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</CardValue>
          </Card>
        </TouchableHighlightCard>
        <TouchableHighlightCard>
          <Card justifyContent='center'>
            <CardIcon style={margins.refinanceMaxValue === 0 ? styles.deactivated : {}} source={require('~/assets/refinancing-2.png')}/>
            <CardTitle style={margins.refinanceMaxValue === 0 ? styles.deactivated : {}}>Refinanciamento</CardTitle>
            {margins.refinanceMaxValue ? <CardValue>Até R$ {margins.refinanceMaxValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</CardValue> : <></>}
          </Card>
        </TouchableHighlightCard>
        <TouchableHighlightCard>
          <Card deactivated={true} justifyContent='center'>
            <CardIcon style={margins.creditCardMaxValue === 0 ? styles.deactivated : {}} source={require('~/assets/creditCard-2.png')}/>
            <CardTitle style={margins.creditCardMaxValue === 0 ? styles.deactivated : {}}>Cartão de crédito consignado</CardTitle>
            {margins.creditCardMaxValue ? <CardValue>Até R$ {margins.creditCardMaxValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</CardValue> : <></>}
          </Card>
        </TouchableHighlightCard>
      </CardContainer>
    </HomeView>
  )
}

export default Opportunities