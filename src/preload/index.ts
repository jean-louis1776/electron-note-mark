import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('context', {
  locale: navigator.language
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
