import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import { Accessor, createMemo, createSignal, JSX, Show } from 'solid-js'
import AvatarImg from '@/assets/img/avatar.png'
import Avatar from '@/components/Common/Avatar/Avatar'
import { destructure } from '@solid-primitives/destructure'

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

interface ChatItemsPropsInf {
  active?: boolean
}

export function ChatItems(props: ChatItemsPropsInf) {
  const { active } = destructure(props)

  const classList = createMemo(() => {
    console.log(active && active())
    if (active && active()) {
      return 'bg-white!'
    }
    return ''
  })

  return (
    <div class={`hover:bg-white h-49 flex py-6 items-center mx-4 rounded-4 ${classList()}`}>
      <div class="w-4 h-4 mx-6 border-1 border-black rounded-full bg-black"></div>

      <Avatar src={AvatarImg} online className="mr-12"></Avatar>

      <div class="flex-1 mr-16 font-700">
        <div class="flex">
          <div class="flex-1 text-14  h-20">郑永楷</div>
          <div class="h-16  text-12 ">14:25</div>
        </div>
        <div class=" text-12 font-700 ">你：1</div>
      </div>
    </div>
  )
}
