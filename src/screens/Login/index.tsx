import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface LoginProps {
  text: string
}

const Login = ({ text }: LoginProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Login
