import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, FilterStyleProps } from './FilterStyles'

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export function Filter({ isActive = false, title, ...rest }: FilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  )
}
