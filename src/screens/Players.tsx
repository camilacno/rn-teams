import React from 'react'
import { Header, Highlight, Input, ButtonIcon } from '@components/index'
import { Container, Form } from './PlayersStyles'

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />
      <Form>
        <Input placeholder='Nome do participante' autoCorrect={false} />
        <ButtonIcon icon='add' type='add' />
      </Form>
    </Container>
  )
}
