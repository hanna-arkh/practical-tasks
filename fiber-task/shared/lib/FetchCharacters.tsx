export const fetchCharacters = async (page: number = 1) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error')
  }
  const data = await response.json()
  return {
    results: data.results,
    hasNextPage: !!data.info.next,
  }
}
