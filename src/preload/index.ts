import { GetNotes, ReadNote, WriteNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('context', {
  locale: navigator.language,
  getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
  readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
  writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args)
})

// console.log('Is nativeTheme available?', typeof nativeTheme !== 'undefined')
// console.log('nativeTheme shouldUseDarkColors:', nativeTheme?.shouldUseDarkColors)
//
// if (nativeTheme) {
//   contextBridge.exposeInMainWorld('theme', {
//     isDarkMode: nativeTheme.shouldUseDarkColors,
//     onThemeUpdated: (callback) => {
//       nativeTheme.on('updated', () => callback(nativeTheme.shouldUseDarkColors))
//     }
//   })
// } else {
//   console.error('nativeTheme is undefined')
// }
