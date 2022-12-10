import logoImg from '@assets/logo.png'
import { Container, Logo, BackIcon, BackButton } from './HeaderStyles'

type HeaderProps = {
  showBackButton?: boolean
  showFowwarButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
