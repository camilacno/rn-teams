import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button, Header, Highlight } from '@components/index'
import { Container, Content, UsersIcon } from './NewGroupStyles'
import { Input } from '@components/Input'

import { groupCreate } from '@storage/group/groupCreate'

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  async function handleCreateNewGroup() {
    await groupCreate(group)
    navigation.navigate('players', { group })
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
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleCreateNewGroup} />
      </Content>
    </Container>
  )
}
