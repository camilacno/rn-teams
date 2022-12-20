import { Link, useNavigation } from '@react-navigation/native'
import logoImg from '@assets/logo.png'
import { Container, Logo, BackIcon, BackButton } from './HeaderStyles'

type HeaderProps = {
  showBackButton?: boolean
  showFowwarButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleNavigateToHome() {
    navigation.goBack()
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleNavigateToHome}>
          <BackIcon />
        </BackButton>
      )}
      <Link to="/groups">
        <Logo source={logoImg} />
      </Link>
    </Container>
  )
}
