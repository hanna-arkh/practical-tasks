import React from 'react'
import { SafeAreaView } from 'react-native'
import { CharactersList } from '../features/ui/CharacterList'
import { AppContainer } from '../shared/ui/styles'
export default function App() {
  return (
    <AppContainer>
      <CharactersList />
    </AppContainer>
  )
}
