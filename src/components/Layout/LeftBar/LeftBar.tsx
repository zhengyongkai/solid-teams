import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import { createSignal } from 'solid-js'

interface LeftBarInf {
  onClick: (type: string) => void
}

export default function LeftBar(props: LeftBarInf) {
  const { onClick } = props
  const [index, setIndex] = createSignal(0)
  const barItems = [
    {
      path: '/notice',
      icon: 'activity',
      name: '活动'
    },
    {
      path: '/chat',
      icon: 'chat',
      name: '聊天'
    },
    {
      path: '/teams',
      icon: 'teams',
      name: '团队'
    },
    {
      path: '/calendar',
      icon: 'calendar',
      name: '日历'
    },
    {
      path: '/tel',
      icon: 'tel',
      name: '通话'
    }
  ]

  return (
    <div class="w-68 bg-cnb5 h-[calc(100vh-48px)] relative">
      <div>
        {barItems.map((item, key) => {
          return (
            <div
              class={`h-56 text-center flex flex-col items-center hover:bg-white ${
                key === index() ? 'fill-cnf3bs text-cnf3bs' : ''
              }`}
              onclick={() => {
                onClick(item.path)
                setIndex(key)
              }}
            >
              <SvgIcon className="m-auto" name={item.icon} size={24}></SvgIcon>
              <div class="text-10">{item.name}</div>
            </div>
          )
        })}
      </div>
      <div
        class="h-50 w-2 top-0 absolute bg-cnf3bs left-2 top-3 rounded-4"
        style={{
          content: '',
          transition: 'all 0.1s',
          translate: '0px ' + index() * 56 + 'px'
        }}
      ></div>
    </div>
  )
}
