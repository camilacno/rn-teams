import { Container } from '@styles/screens/GroupsStyles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
      <GroupCard title='Turma1' />
      <GroupCard title='Turma2' />
      <GroupCard title='Turma3' />
    </Container>
  )
}
