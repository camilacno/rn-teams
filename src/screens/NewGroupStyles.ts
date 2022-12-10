import styled from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const UsersIcon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))`
  align-self: center;
`
