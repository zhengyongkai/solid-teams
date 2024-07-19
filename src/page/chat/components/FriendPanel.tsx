import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import { createSignal, JSX, Show } from 'solid-js'
import Avatar from '@/assets/img/avatar.png'

interface FriendPanelInf {
  children: JSX.Element
  title: string
  defaultOpen: boolean
}

export default function FriendPanel(props: FriendPanelInf) {
  const [isContractions, setisContractions] = createSignal(!props.defaultOpen)

  return (
    <>
      <div
        class="flex h-24 items-center mt-12 text-10 mx-4 px-2 py-4"
        onClick={() => {
          setisContractions(!isContractions())
        }}
      >
        {isContractions() ? (
          <SvgIcon name={'contractions'} className=" mr-6" size={12} />
        ) : (
          <SvgIcon name={'commence'} className=" mr-6" size={12} />
        )}
        {props.title}
      </div>
      <Show when={!isContractions()}>
        <div>{props.children}</div>
      </Show>
    </>
  )
}

export function ChatItems() {
  return (
    <div class="bg-white h-49 flex py-6 items-center">
      <div class="w-4 h-4 mx-6 border-1 border-black rounded-full bg-black"></div>
      <div class="mr-12">
        <img class="w-32 h-32 m-auto rounded-full" src={Avatar} alt="" />
      </div>
      <div class="flex-1 mr-16">
        <div class="flex">
          <div class="flex-1 text-14 font-700 h-20">郑永楷</div>
          <div class="h-16  text-12 ">14:25</div>
        </div>
        <div class=" text-12 font-700">你：1</div>
      </div>
    </div>
  )
}
