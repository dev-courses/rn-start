import React, { useCallback } from 'react'
import { View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import Button from 'src/components/auth/Button'
import styles from './styles'

interface AuthProps {
  navigation: NavigationScreenProp<any>
}

const Auth: React.FC<AuthProps> = ({ navigation }) => {
  const goToLogin = useCallback(() => {
    navigation.navigate('Login')
  }, [])

  const goToSignup = useCallback(() => {
    navigation.navigate('Signup')
  }, [])

  return (
    <View style={styles.container}>
      <Button title='Регистрация' onPress={goToSignup} />
      <Button title='Вход' onPress={goToLogin} />
    </View>
  )

}

export default Auth
