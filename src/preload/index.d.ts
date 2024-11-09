import { GetNotes, ReadNote, WriteNote } from '../shared/types'

export {}

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
    }
    // theme: {
    //   isDarkMode: boolean
    //   onThemeUpdated: (callback: (isDarkMode: boolean) => void) => void
    // }
  }
}
