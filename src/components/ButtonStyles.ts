import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

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
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
