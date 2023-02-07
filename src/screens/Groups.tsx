import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import {
  Header,
  Highlight,
  GroupCard,
  EmptyList,
  Button,
} from '@components/index'
import { Container } from './GroupsStyles'

import { groupsGetAll } from '@storage/group/groupsGetAll'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Turma 1'])
  const navigation = useNavigation()

  async function fetchGroups() {
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  function handleNavigateToNewGroup() {
    navigation.navigate('newGroup')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
        ListEmptyComponent={() => (
          <EmptyList message="Sem turmas cadastrados. Cadastre uma nova turma!" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button title="Criar nova turma" onPress={handleNavigateToNewGroup} />
    </Container>
  )
}
