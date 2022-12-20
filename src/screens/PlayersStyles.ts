import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
`

export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  max-height: 56px;
  min-height: 56px;
  width: 100%;

  flex-direction: row;
  justify-content: center;
`

export const HeaderList = styled.View`
  padding: 24px 0;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PlayersCounter = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
