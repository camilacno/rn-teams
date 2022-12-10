import { FlatList } from 'react-native'
import { useState } from 'react'
import {
  Header,
  Highlight,
  GroupCard,
  EmptyList,
  Button,
} from '@components/index'

import { Container } from './GroupsStyles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Turma 1'])

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
        ListEmptyComponent={() => (
          <EmptyList message='Sem turmas cadastrados. Cadastre uma nova turma!' />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button title='Criar nova turma' />
    </Container>
  )
}
