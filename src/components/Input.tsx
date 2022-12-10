import React from 'react'
import { TextInputProps } from 'react-native'
import { Container } from '@styles/components/InputStyles'

type InputProps = TextInputProps & {}

export function Input({ ...rest }: InputProps) {
  return (
    <Container
      {...rest}
      placeholder='Nome da turma'
      placeholderTextColor='#7C7C8A'
    />
  )
}
