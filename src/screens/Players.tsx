import React from 'react'
import { Header, Highlight, Input } from '@components/index'
import { Container } from './PlayersStyles'

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />

      <Input placeholder='Nome do participante' />
    </Container>
  )
}
