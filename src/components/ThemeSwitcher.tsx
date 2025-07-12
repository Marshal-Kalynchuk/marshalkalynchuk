'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { NavbarItem } from '@/components/ui/navbar'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <NavbarItem onClick={toggleTheme}>
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </NavbarItem>
  )
} 