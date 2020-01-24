import React, { useState, useCallback } from 'react'
import { View, Text, TextInput } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import Title from 'src/components/auth/Title'
import Button from 'src/components/auth/Button'
import login from 'src/api/login'

import styles from './styles'

interface LoginProps {
  navigation: NavigationScreenProp<any>
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = useCallback(async () => {
    try {
      const user = await login({ email, password })
      console.log(user)
    } catch(e) {
      console.log(e)
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title title='Вход' />
      </View>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        placeholder='Email'
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        secureTextEntry={true}
        placeholder='Password'
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button
          title='Войти'
          onPress={submit}
        />
      </View>
    </View>
  )
}

export default Login
