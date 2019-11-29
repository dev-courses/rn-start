import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import styles from './styles'

interface AuthProps {
  navigation: NavigationScreenProp<any>
}

class Auth extends Component<AuthProps> {
  goToLogin = () => {
    this.props.navigation.navigate('Login', { label: 'Login (back)' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Login' onPress={this.goToLogin} />
      </View>
    )
  }
}

export default Auth
