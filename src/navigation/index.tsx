import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Auth from 'src/screens/Auth'
import Login from 'src/screens/Login'

const AppNavigator = createStackNavigator({
  Auth: {
    screen: Auth,
  },
  Login: {
    screen: Login,
  },
},
{
  initialRouteName: 'Auth',
  headerMode: 'none',
})

export default createAppContainer(AppNavigator)