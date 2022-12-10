import { Container, Subtitle, Title } from '@styles/components/HighlightStyles'

type HighlightProps = {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
