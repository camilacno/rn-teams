import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  ButtonText,
  ButtonTypeStyleProps,
} from '@styles/components/ButtonStyles'

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button({ type, title, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}
