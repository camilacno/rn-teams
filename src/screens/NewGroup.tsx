import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Header, Highlight } from '@components/index'
import { Container, Content, UsersIcon } from './NewGroupStyles'
import { Input } from '@components/Input'

export function NewGroup() {
  const navigation = useNavigation()

  function handleCreateNewGroup() {
    navigation.navigate('players', { group: 'Novo grupo teste navegação' })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersIcon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" onPress={handleCreateNewGroup} />
      </Content>
    </Container>
  )
}
