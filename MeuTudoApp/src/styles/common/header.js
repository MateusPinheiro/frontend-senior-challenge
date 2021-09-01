import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HeaderContainer = styled.View`
  background-color: black;
  display: flex;
  flex-direction: row;
  border-bottom-right-radius: 50px;
`

const Text = styled.Text`
  color: white;
  font-family: montserrat;
`

const Title = styled.Text`
  font-family: montserrat-semibold;
  font-size: 19px;
  color: white;
  margin-bottom: 15px;
`

const HeaderInfo = styled.View`
  margin-top: ${({ onlyTitle }) => onlyTitle ? '20px' : '40px'};
  margin-bottom: ${({ onlyTitle }) => onlyTitle ? '10px' : '20px'};
  display: flex;
  align-items: center;
  width: 60%;
`

const SideContainer = styled.View`
  width: 20%;
  padding: ${({ rigthSide }) => (rigthSide ? '0' : '10px')};
  display: flex;
  align-items: ${({ rigthSide }) => (rigthSide ? 'flex-end' : 'flex-start')};
`

const Logo = styled.Image`
  width: 40px;
  height: 40px;
`

const AvailableValue = styled.Text`
  color: #d22688;
  font-size: 30px;
  font-family: montserrat;
  font-weight: bold;
`

const CollapseIconView = styled.TouchableHighlight`
  position: absolute;
  top: 100%;
  left: 50%;
  border-radius: 50px;
  height: 35px;
  width: 35px;
  margin-top: -17.5px;
  margin-left: -17.5px;
  background-color: #d22688;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const HeaderIcon = styled(Icon)`
  margin: 10px;
`

export {
  HeaderContainer,
  SideContainer,
  HeaderInfo,
  Logo,
  Text,
  Title,
  AvailableValue,
  CollapseIconView,
  HeaderIcon,
}
