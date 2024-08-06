import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import { Accessor, createMemo, createSignal, JSX, Show } from 'solid-js'
import AvatarImg from '@/assets/img/avatar.png'
import Avatar from '@/components/Common/Avatar/Avatar'
import { destructure } from '@solid-primitives/destructure'
import { ChatItemDataInf } from '../types/chat'

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
  data: ChatItemDataInf
  onChange?: (_e: ChatItemDataInf) => void
}

export function ChatItems(props: ChatItemsPropsInf) {
  const { active = createSignal(false)[0] } = destructure(props)
  const { data, onChange } = props

  const classList = createMemo(() => {
    if (active && active()) {
      return 'bg-white!'
    }
    return ''
  })

  return (
    <div
      class={`hover:bg-white h-49 flex py-6 items-center mx-4 rounded-4  cursor-pointer relative mb-2 ${classList()}  `}
      onClick={() => {
        onChange?.(data)
      }}
    >
      <div class="w-4 h-4 mx-6 border-1 border-black rounded-full bg-black"></div>

      <Avatar src={AvatarImg} online className="mr-12"></Avatar>

      <div class="flex-1 mr-16 font-700">
        <div class="flex">
          <div class="flex-1 text-14  h-20">{data.name}</div>
          <div class="h-16  text-12 ">{data.date}</div>
        </div>
        <div class=" text-12 font-700 ">你：1</div>
      </div>

      <Show when={active()}>
        <div class="absolute right-4  top-0 bottom-0 bg-white flex items-center justify-center w-50 hover:text-cnf2bs">
          <SvgIcon name="setting" isButton size={20} />
        </div>
      </Show>
    </div>
  )
}
