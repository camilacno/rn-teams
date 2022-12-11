import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'add' | 'delete'

type ButtonIconProps = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  margin-left: 12px;
  height: 56px;
  width: 56px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'add' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
    // color: () => {
    //   switch (type) {
    //     case 'add':
    //       return theme.COLORS.GREEN_700
    //     case 'delete':
    //       return theme.COLORS.RED_DARK
    //     default:
    //       return theme.COLORS.GREEN_700
    //   }
    // },
  })
)``
