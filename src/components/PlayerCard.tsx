import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { Container, PlayerName, PlayerIcon } from './PlayerCardStyles'

type PlayerCardProps = {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  function handleRemovePlayer(name: string) {
    console.log(name)
  }

  return (
    <Container>
      <PlayerIcon name='person' />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon
        icon='close'
        type='delete'
        onPress={() => handleRemovePlayer(name)}
      />
    </Container>
  )
}
