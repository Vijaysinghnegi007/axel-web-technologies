"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  // Add localStorage persistence
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme && props.setTheme) {
      props.setTheme(savedTheme)
    }
  }, [props])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}