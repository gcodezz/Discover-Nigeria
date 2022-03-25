import { createContext } from 'react'

interface toggleContext {
    toggleTheme: () => void
}

export const Context = createContext<toggleContext>({
    toggleTheme() {}
})