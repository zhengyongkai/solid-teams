import useStore from '@/hook/useStore'
import { destructure } from '@solid-primitives/destructure'
import { createSignal, onMount, splitProps } from 'solid-js'

interface ChildrenProps {
  data: {
    id: number
  }
}

function Children(props: ChildrenProps) {
  let [{ data }, others] = splitProps(props, ['data'])

  let datas = data

  onMount(() => {
    console.log('children onMounted')
  })

  return (
    <>
      <input type="text" value={datas.id()} />
    </>
  )
}

export default function test() {
  const store = useStore().lang
  const lang = useStore()

  const [text, setText] = createSignal({
    id: 23
  })

  return (
    <>
      <div
        onclick={() => {
          setText({
            id: 3141
          })
        }}
      >
        Paremt {store()}
        {text().id}
      </div>
      <Children data={text()}></Children>
    </>
  )
}
