import { JSX } from 'solid-js'

interface TitlePanelPropsInf {
  children: JSX.Element[]
}

export default function TitlePanel(props: TitlePanelPropsInf) {
  return (
    <>
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss">
        <div class="font-700  flex-1 flex items-center">{props.children[0]}</div>
        <div>
          <div class="mr-8">{props.children[1]}</div>
        </div>
      </div>
    </>
  )
}
