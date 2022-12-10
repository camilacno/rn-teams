import React from 'react'
import {
  Container,
  GroupTitle,
  UsersIcon,
} from '@styles/components/GroupCardStyles'
import { TouchableOpacityProps } from 'react-native'

type GroupCardProps = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <GroupTitle>{title}</GroupTitle>
    </Container>
  )
}
