import React from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container } from '@styles/components/InputStyles'

type InputProps = TextInputProps & {}

export function Input({ ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />
}