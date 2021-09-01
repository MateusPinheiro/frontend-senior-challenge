import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles, HomeView, Title, BankCard } from '~/styles/home/home'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import moment from 'moment/min/moment-with-locales'

const Options = ({ navigation }) => {
  const simulation = useSelector(state => state.home.optionsData)
  
  return (
    <HomeView>
      <Title>Escolha um banco.</Title>
      <BankCard>
        <View style={styles.firstContainer}>
          <View style={styles.firstContainerFirstView}>
            <View style={styles.bankCardImageContainer}>
              <Image style={styles.bankCardImage} source={require('~/assets/tudo-logo-120.png')}/>
            </View>
            <View>
              <Text style={{ ...styles.bankText, ...styles.bankTextBold }}>{simulation.numberOfInstallments} parcelas de</Text>            
              <Text style={styles.bankValue}>R$ {simulation.installmentsValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Text>            
              <Text style={{ ...styles.bankText }}>Total de R$ {simulation.contractValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Text> 
            </View>
          </View>
          <View style={styles.firstContainerView}>
            <Text style={styles.bankText}>com taxa de</Text>
            <Text style={{ ...styles.bankText, ...styles.bankTextBold }}>{simulation.nominalRate * 100}% a.m.</Text>            
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.secondContainerFirstView}>
            <View style={styles.finishTextView}>
              <Text style={styles.bankText}>Previsão de pagamento</Text>
              <Icon 
                name='help-circle-outline'
                color="#d22688"
                size={20}
              />
            </View>
            
            <Text style={{ ...styles.bankText, ...styles.bankTextBold }}>{moment().add(simulation.numberOfInstallments, 'months').format('LL')}</Text>
          </View>
          <View style={styles.secondContainerView}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Opportunities')}>
              <View style={styles.finishTextView}>
                <Text style={styles.finishTextButton}>Contratar </Text>
                <Icon
                  name='chevron-right'
                  color="#d22688"
                  size={20} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </BankCard>
    </HomeView>
  )
}

export default Options