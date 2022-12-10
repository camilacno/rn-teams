import {
  Container,
  Logo,
  BackIcon,
  BackButton,
} from '@styles/components/HeaderStyles'
import logoImg from '@assets/logo.png'

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
