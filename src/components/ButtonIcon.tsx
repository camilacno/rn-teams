import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, ButtonIconTypeStyleProps } from './ButtonIconStyles'
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
