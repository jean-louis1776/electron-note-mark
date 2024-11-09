import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  SideBar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  // useEffect(() => {
  //   if (window.theme) {
  //     // Установить начальную тему, если `theme` определен
  //     if (window.theme.isDarkMode) {
  //       document.documentElement.classList.add('dark')
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //     }
  //
  //     // Подписаться на изменения темы
  //     window.theme.onThemeUpdated((isDarkMode: boolean) => {
  //       if (isDarkMode) {
  //         document.documentElement.classList.add('dark')
  //       } else {
  //         document.documentElement.classList.remove('dark')
  //       }
  //     })
  //   } else {
  //     console.warn('window.theme не определен')
  //   }
  // }, [])

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </SideBar>
        <Content ref={contentContainerRef} className="border-l border-l-white/20 bg-zinc-900/50">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
