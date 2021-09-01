import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewLoanData } from '~/store/actions/homeActions'
import { 
  CardContainer,
  HomeView,
  Title,
  TouchableHighlightCard,
  CenteredView,
  ContinueButton,
  Text,
  ValueInputCurrency,
  TextUnderline,
  CardText, 
  SelectableCard
} from '~/styles/home/home'

const Values = ({ navigation }) => {
  const [otherValue, setOtherValue] = useState(0)
  const [selectedValue, setSelectedValue] = useState(0)
  
  const dispatch = useDispatch()
  const values = useSelector(state => state.home.valuesData.suggestedValues)

  const onContinue = () => {
    dispatch(setNewLoanData({ value: selectedValue }))
    navigation.navigate('Period')
  }
  
  return (
    <HomeView>
      <Title>De quanto você precisa?</Title>
      <CardContainer>
        {values.map((value, index) => 
          <TouchableHighlightCard key={index} onPress={() => {
            setOtherValue(0)
            setSelectedValue(value)
          }}>
            <SelectableCard height="58px" selected={selectedValue === value}>
              <CardText selected={selectedValue === value}>R$ {value.toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</CardText>
            </SelectableCard>
          </TouchableHighlightCard>)}
        <CenteredView>
          <Title>Outro valor</Title>
          <ValueInputCurrency
            value={otherValue}
            onChangeValue={value => {
              setOtherValue(value || 0)
              setSelectedValue(value || 0)
            }}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            keyboardType="decimal-pad"
          />
        </CenteredView>
      </CardContainer>
      <CenteredView>
        <ContinueButton onPress={onContinue}>
          <Text>Continuar</Text>
        </ContinueButton>
      </CenteredView>
      <CenteredView>
        <TextUnderline>Simule pela parcela</TextUnderline>
      </CenteredView>
    </HomeView>
  )
}

export default Values