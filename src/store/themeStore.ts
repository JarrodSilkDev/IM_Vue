// Utilities
import { defineStore } from 'pinia'
import { usePreferredDark, useLocalStorage } from '@vueuse/core'
import { useTheme } from 'vuetify'

export const useThemeStore = defineStore('theme', () => {
  const perferDark = usePreferredDark()
  const isDark = useLocalStorage('UseDarkMode', perferDark.value)

  const theme = useTheme()

  function setTheme() {
    theme.global.name.value = isDark.value ? 'dark' : 'light'
  }

  setTheme()

  const toggleTheme = () => {
    isDark.value = !isDark.value
    setTheme()
  }

  return {
    isDark,
    toggleTheme
  }
})
