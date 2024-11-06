import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  SideBar
} from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </SideBar>
        <Content className="border-l border-l-white/20 bg-zinc-900/50">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
