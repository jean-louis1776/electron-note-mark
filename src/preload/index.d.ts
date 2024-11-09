import { GetNotes, ReadNote } from '../shared/types'

export {}

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
    }
    // theme: {
    //   isDarkMode: boolean
    //   onThemeUpdated: (callback: (isDarkMode: boolean) => void) => void
    // }
  }
}
