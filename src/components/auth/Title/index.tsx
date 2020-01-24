import React from 'react'
import { Text, ViewStyle } from 'react-native'

import styles from './styles'

interface TitleProps {
  title: string
  style?: ViewStyle
}

const Title: React.FC<TitleProps> = ({ title, style }) => {
  return <Text style={[styles.title, style]}>{title}</Text>
}

export default Title