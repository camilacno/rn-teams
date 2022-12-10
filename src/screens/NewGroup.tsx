import React from 'react'
import { Button, Header, Highlight } from '@components/index'
import { Container, Content, UsersIcon } from './NewGroupStyles'
import { Input } from '@components/Input'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersIcon />
        <Highlight
          title='Nova turma'
          subtitle='Crie uma turma para adicionar pessoas'
        />
        <Input placeholder='Nome da turma' />
        <Button title='Criar' />
      </Content>
    </Container>
  )
}
