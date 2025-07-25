import { useState, createContext, useEffect, useContext, ReactNode } from 'react'
import { resolveTheme } from './ResolveTheme'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<Theme | undefined>(undefined)

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const currentTheme = resolveTheme() as Theme
    setTheme(currentTheme)
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
