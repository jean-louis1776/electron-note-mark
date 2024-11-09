export {}

declare global {
  interface Window {
    context: {
      locale: string
    }
    // theme: {
    //   isDarkMode: boolean
    //   onThemeUpdated: (callback: (isDarkMode: boolean) => void) => void
    // }
  }
}
