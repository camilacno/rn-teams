import React from 'react'
import { Button, Header, Highlight } from '@components/index'
import { Container, Content, UsersIcon } from '@styles/screens/NewGroupStyles'
import { Input } from '@components/Input'

type NewGroupProps = {
  item: string
}

export function NewGroup({ item }: NewGroupProps) {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersIcon />
        <Highlight
          key={item}
          title='Nova turma'
          subtitle='Crie uma turma para adicionar pessoas'
        />
        <Input />
        <Button title='Criar' />
      </Content>
    </Container>
  )
}
