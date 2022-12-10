import { FlatList } from 'react-native'
import { useState } from 'react'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { Container } from '@styles/screens/GroupsStyles'
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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
