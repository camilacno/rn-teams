import React, { useState } from 'react'
import { FlatList } from 'react-native'
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

export function Players() {
  const TEAMS = ['Time 1', 'Time 2', 'Time 3']
  const [selectedTeam, setSelectedTeam] = useState('Time 1')
  const [players, setPlayers] = useState([
    'Camila',
    'Lívia',
    'Raquel',
    'Sabrina',
    'Nathália',
    'Pedro',
    'Rebeca',
    'Bete',
    'Lourdes',
    'Sueli',
  ])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />
      <Form>
        <Input placeholder='Nome do participante' autoCorrect={false} />
        <ButtonIcon icon='add' type='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={TEAMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              key={item}
              title={item}
              onPress={() => setSelectedTeam(item)}
              isActive={item === selectedTeam}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <PlayersCounter>{players.length}</PlayersCounter>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard key={item} name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <EmptyList message='Sem jogadores adicionados. Adicione jogadores ao time!' />
        )}
      />

      <Button title='Remover turma' type='danger' />
    </Container>
  )
}
