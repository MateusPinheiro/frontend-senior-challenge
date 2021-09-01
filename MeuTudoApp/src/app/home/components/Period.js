import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewLoanData } from '~/store/actions/homeActions'
import { 
  CardContainer, 
  CardText, 
  CenteredView, 
  ContinueButton, 
  HomeView, 
  SelectableCard, 
  Text, 
  Title, 
  TouchableHighlightCard, 
  ValueInput 
} from '~/styles/home/home'

const Period = ({ navigation }) => {
  const [months, setMonths] = useState('')
  const [selectedValue, setSelectedValue] = useState(0)
  
  const dispatch = useDispatch() 
  const values = useSelector(state => state.home.periodData.suggestedInstallments)

  const onContinue = () => {
    dispatch(setNewLoanData({ period: selectedValue }))
    navigation.navigate('Options')
  }

  return (
    <HomeView>
      <Title>Em quanto tempo você quer pagar?</Title>
      <CardContainer>
        {values.map((value, index) => 
          <TouchableHighlightCard key={index} onPress={() => {
            setSelectedValue(value)
            setMonths('')
          }}>
            <SelectableCard selected={selectedValue === value} height="58px">
              <CardText selected={selectedValue === value}>{value} Meses</CardText>
            </SelectableCard>
          </TouchableHighlightCard>)}
        <CenteredView>
          <ValueInput
            value={months}
            onChangeText={value => {
              setMonths(value)
              setSelectedValue(value)
            }}
            placeholder="00"
            keyboardType="decimal-pad"
          />
          <Title>meses</Title>
        </CenteredView>
      </CardContainer>
      <CenteredView>
        <ContinueButton onPress={onContinue}>
          <Text>Continuar</Text>
        </ContinueButton>
      </CenteredView>
    </HomeView>
  )
}

export default Period