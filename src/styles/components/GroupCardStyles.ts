import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  height: 90px;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 30px;
  width: 100%;

  flex-direction: row;
  align-items: center;
`

export const UsersIcon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 32,
  weight: 'fill',
}))`
  margin-right: 20px;
`

export const GroupTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`
