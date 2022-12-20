import { useNavigation } from '@react-navigation/native'
import logoImg from '@assets/logo.png'
import { Container, Logo, BackIcon, BackButton } from './HeaderStyles'

type HeaderProps = {
  showBackButton?: boolean
  showFowwarButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleNavigateToHome() {
    navigation.navigate('groups')
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleNavigateToHome}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
