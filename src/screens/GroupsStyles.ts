import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;

  padding: 24px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`
