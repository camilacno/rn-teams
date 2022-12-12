import React, { useState } from 'react'
import { Header, Highlight, Input, ButtonIcon, Filter } from '@components/index'
import { Container, Form } from './PlayersStyles'

export function Players() {
  const [filterIsActive, setFilterIsActive] = useState(false)

  function toggleFilter() {
    setFilterIsActive(!filterIsActive)
  }

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

      <Filter title='Time 1' onPress={toggleFilter} isActive={filterIsActive} />
    </Container>
  )
}
