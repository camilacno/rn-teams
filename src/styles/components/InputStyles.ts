import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 16px;
  max-height: 56px;
  min-height: 56px;
  padding: 15px;

  flex: 1;
`
