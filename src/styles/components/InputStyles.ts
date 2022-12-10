import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border-radius: 6px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-bottom: 16px;
    max-height: 56px;
    min-height: 56px;
    padding: 15px;

    flex: 1;
  `}
`
