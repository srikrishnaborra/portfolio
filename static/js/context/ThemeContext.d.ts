// Type declarations for ThemeContext.jsx
export const useTheme: () => {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeProvider: React.ComponentType<{
  children: React.ReactNode
}>


