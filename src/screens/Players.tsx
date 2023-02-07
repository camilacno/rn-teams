import React, { useEffect, useState, useRef } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { AppError } from '@utils/AppError'

import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playerAddByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'
import { groupRemoveByName } from '@storage/group/groupRemoveByName'

import {
  Header,
  Highlight,
  Input,
  ButtonIcon,
  Filter,
  EmptyList,
  PlayerCard,
  Button,
  Loading,
} from '@components/index'
import { Container, Form, HeaderList, PlayersCounter } from './PlayersStyles'

type RouteParams = {
  group: string
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true)
  const TEAMS = ['Time 1', 'Time 2', 'Time 3']
  const [team, setTeam] = useState('Time 1')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const { group } = route.params as RouteParams
  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar'
      )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      newPlayerNameInputRef?.current?.blur()
      setNewPlayerName('')
      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playerAddByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
      Alert.alert('Remover pessoa', 'Removido com sucesso!')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', 'Não foi possível remover')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', 'Não foi possível remover turma')
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover grupo',
      `Tem certeza que deseja remover a turma ${group}?`,
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove() },
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" type="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={TEAMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              key={item}
              title={item}
              onPress={() => setTeam(item)}
              isActive={item === team}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <PlayersCounter>{players.length}</PlayersCounter>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              key={item.name}
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
          ListEmptyComponent={() => (
            <EmptyList message="Sem jogadores adicionados. Adicione jogadores ao time!" />
          )}
        />
      )}

      <Button title="Remover turma" type="danger" onPress={handleGroupRemove} />
    </Container>
  )
}
