import { Container } from '@styles/screens/GroupsStyles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
    </Container>
  )
}
