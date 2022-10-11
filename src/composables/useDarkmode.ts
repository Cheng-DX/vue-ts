const mode = useColorMode({
  modes: {
    light: 'light',
    dark: 'dark',
  },
})
const darkmode = computed<boolean>({
  get: () => mode.value === 'dark',
  set: (newVal: boolean) => {
    mode.value = newVal ? 'dark' : 'light'
  },
})

const toggleDarkmode = useToggle(darkmode)

export function useDarkmode() {
  return {
    darkmode,
    toggleDarkmode,
  }
}
