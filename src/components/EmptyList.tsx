import React from 'react'
import { Container, Message } from '@styles/components/EmptyListStyles'
import { Button } from './Button'

type EmptyListProps = {
  message: string
}

export function EmptyList({ message }: EmptyListProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
