import React from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container } from './InputStyles'

type InputProps = TextInputProps & {}

export function Input({ placeholder, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
      placeholder={placeholder}
    />
  )
}
