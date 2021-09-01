import styled from 'styled-components/native'
import CurrencyInput from 'react-native-currency-input'
import Card from '~/app/common/components/Card'
import { StyleSheet } from 'react-native'

const HomeView = styled.ScrollView`
  margin-top: 20px;
  height: 100%;
`

const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
`

const Title = styled.Text`
  font-family: montserrat-semibold;
  font-size: 18px;
  padding: 10px 0 0 10px;
`

const CardIcon = styled.Image`
  width: 45px;
  height: 45px;
`
const CardTitle = styled.Text`
  font-family: montserrat-semibold;
  font-size: 14px;
`

const CardTitleView = styled.View`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 5px;
`

const CardValue = styled.Text`
  font-family: montserrat;
  font-size: 12px;
  color: #d22688;
`

const TouchableHighlightCard = styled.TouchableHighlight`
  width: 47%;
  border-radius: 10px;
  margin-bottom: 10px;
`

const CenteredView = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
`

const ContinueButton = styled.TouchableHighlight`
  color: white;
  background-color: #d22688;
  border-radius: 20px;
  padding: 10px;
  height: 40px;
  width: 166px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-family: montserrat-semibold;
`

const ValueInputCurrency = styled(CurrencyInput)`
  border-bottom-color: #bebebe;
  border-bottom-width: 1px;
  height: 40px;
  width: 126px;
  padding: 10px 10px -10px 10px;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-family: montserrat;
`

const ValueInput = styled.TextInput`
  border-bottom-color: #bebebe;
  border-bottom-width: 1px;
  height: 40px;
  width: 86px;
  padding: 10px 10px -10px 10px;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-family: montserrat;
  text-align: center;
`

const TextUnderline = styled.Text`
  color: #d22688;
  font-size: 17px;
  text-decoration-line: underline;
  margin-top: 10px;
`

const BankCard = styled(Card)`
  margin: 10px;
  border-left-color: #d22688;
  border-left-width: 7px;
  border-radius: 7px;
  height: 203px;
  padding: 15px;
`

const CardText = styled.Text`
  font-family: montserrat;
  font-size: 16px;
  text-align: center;
  color: ${({ selected }) => selected ? 'white' : 'black'};
`
const SelectableCard = styled(Card)`
  background-color: ${({ selected }) => selected ? '#D22688' : 'white'};
`

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    height: '40%'
  },
  firstContainer: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1,
    paddingBottom: 20,
    height: '60%',
    flexDirection: 'row'
  },
  firstContainerFirstView: {
    borderRightColor: '#bfbfbf',
    borderRightWidth: 1,
    paddingRight: 10,
    width: '72%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstContainerView: {
    height: '90%',
    justifyContent: 'center',
    paddingLeft: 5
  },
  bankCardImage: {
    width: 35,
    height: 35
  },
  bankCardImageContainer: {
    width: 60,
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  bankValue: {
    fontFamily: 'montserrat-semibold',
    fontSize: 18,
    color: '#d22688',
    fontWeight: 'bold'
  },
  bankText: {
    fontFamily: 'montserrat',
    textAlign: 'left'
  },
  bankTextBold: {
    fontWeight: 'bold'
  },
  secondContainerFirstView: {
    alignItems: 'flex-start',
    width: '70%',
    paddingTop: 12
  },
  secondContainerView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  finishTextButton: {
    fontFamily: 'montserrat-semibold',
    fontSize: 13,
    color: '#d22688',
    marginBottom: 2,
    justifyContent: 'center'
  },
  finishTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deactivated: {
    opacity: 0.1,
  }
})

export {
  HomeView,
  CardContainer,
  Title,
  CardIcon,
  CardTitle,
  CardValue,
  TouchableHighlightCard,
  CardTitleView,
  CenteredView,
  ContinueButton,
  ValueInputCurrency,
  Text,
  TextUnderline,
  ValueInput,
  BankCard,
  CardText,
  SelectableCard,
  styles
}