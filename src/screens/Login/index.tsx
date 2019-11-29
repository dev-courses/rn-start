import React from 'react'
import { View, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import styles from './styles'

interface LoginProps {
  navigation: NavigationScreenProp<any>
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack()
  }

  const label = navigation.getParam('label')
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={goBack}>{label}</Text>
    </View>
  )
}

export default Login
