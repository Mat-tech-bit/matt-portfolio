"use client"

import React, { useState, createContext, useContext, useMemo, useEffect } from "react"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material"
import { DarkMode, LightMode } from "@mui/icons-material"

const ThemeModeContext = createContext({
  darkMode: true,
  toggleTheme: () => {},
})

export function ThemeToggleProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => setDarkMode((prev) => !prev)

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#3b82f6",
      },
      background: {
        default: darkMode ? "#0a0a0a" : "#f8fafc",
        paper: darkMode ? "#141414" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "var(--font-roboto)",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`,
            boxShadow: "none",
          },
        },
      },
    },
  }), [darkMode])

  return (
    <ThemeModeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)

export function ThemeToggleButton() {
  const { darkMode, toggleTheme } = useThemeMode()
  return (
    <IconButton 
      onClick={toggleTheme}
      sx={{ 
        bgcolor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
        border: "1px solid",
        borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        color: darkMode ? "#fbbf24" : "#4b5563",
        "&:hover": {
          bgcolor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          transform: "rotate(15deg)",
        },
        transition: "all 0.3s ease",
      }}
    >
      {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
    </IconButton>
  )
}

