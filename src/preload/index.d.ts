import {CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote} from '../shared/types'

export {}

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
    // theme: {
    //   isDarkMode: boolean
    //   onThemeUpdated: (callback: (isDarkMode: boolean) => void) => void
    // }
  }
}
