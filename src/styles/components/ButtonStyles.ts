import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'success' | 'danger'

type ButtonProps = {
  type?: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  border-radius: 6px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.COLORS.GREEN_700
      case 'danger':
        return theme.COLORS.RED_DARK
      default:
        return theme.COLORS.GREEN_700
    }
  }};
  min-height: 56px;
  max-height: 56px;

  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
