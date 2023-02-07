import React from 'react'
import { TextInputProps, TextInput } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container } from './InputStyles'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}
