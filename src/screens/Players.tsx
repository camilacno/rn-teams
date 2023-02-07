import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { AppError } from '@utils/AppError'

import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playerAddByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'

import {
  Header,
  Highlight,
  Input,
  ButtonIcon,
  Filter,
  EmptyList,
  PlayerCard,
  Button,
} from '@components/index'
import { Container, Form, HeaderList, PlayersCounter } from './PlayersStyles'

type RouteParams = {
  group: string
}

export function Players() {
  const TEAMS = ['Time 1', 'Time 2', 'Time 3']
  const [team, setTeam] = useState('Time 1')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')

  const route = useRoute()
  const { group } = route.params as RouteParams

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
      const playersByTeam = await playerAddByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.'
      )
    }
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

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard key={item.name} name={item.name} onRemove={() => {}} />
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

      <Button title="Remover turma" type="danger" />
    </Container>
  )
}
