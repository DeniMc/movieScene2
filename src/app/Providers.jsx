'use client'

import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="data-theme">
      {children}
    </ThemeProvider>
  )
}