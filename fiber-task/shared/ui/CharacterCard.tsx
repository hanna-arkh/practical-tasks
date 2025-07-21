import React from 'react'
import { CharacterType } from '../../entities/types'
import { Name, Card } from './styles'

export const CharacterCard = ({ name }: CharacterType) => (
  <Card>
    <Name>{name}</Name>
  </Card>
)
