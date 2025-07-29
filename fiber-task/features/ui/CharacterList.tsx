import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { CharacterCard } from '../../shared/ui/CharacterCard'
import { fetchCharacters } from '../../shared/lib/FetchCharacters'
import { CharacterType } from '../../entities/types'

export const CharactersList = () => {
  const [charactersList, setCharacters] = useState<CharacterType[]>([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  const load = async () => {
    try {
      const { results, hasNextPage } = await fetchCharacters(page)
      setCharacters(prev => [...prev, ...results])
      setHasNextPage(hasNextPage)
      setPage(prev => prev + 1)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    load()
  }, [])
  return (
    <FlatList
      data={charactersList}
      onEndReached={load}
      keyExtractor={(item: CharacterType) => item.id.toString()}
      renderItem={({ item }) => <CharacterCard name={item.name} image={item.image} id={item.id} />}
    />
  )
}
