import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import {
  Header,
  Highlight,
  GroupCard,
  EmptyList,
  Button,
  Loading,
} from '@components/index'
import { Container } from './GroupsStyles'

import { groupsGetAll } from '@storage/group/groupsGetAll'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>(['Turma 1'])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GroupCard
              key={item}
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList message="Sem turmas cadastrados. Cadastre uma nova turma!" />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
        />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
