import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import useLang from '@/hook/useLang'
import { useLocation, useNavigate } from '@solidjs/router'
import { createMemo, createSignal, Show } from 'solid-js'

interface LeftBarInf {
  onClick: (type: string) => void
}

export default function LeftBar(props: LeftBarInf) {
  const barItems = [
    {
      path: '/common/notice',
      icon: 'activity',
      name: '活动'
    },
    {
      path: '/common/chat',
      icon: 'chat',
      name: '聊天'
    },
    {
      path: '/common/teams',
      icon: 'teams',
      name: '团队'
    },
    {
      path: '/common/calendar',
      icon: 'calendar',
      name: '日历'
    },
    {
      path: '/common/tel',
      icon: 'tel',
      name: '通话'
    }
  ]
  const location = useLocation()
  const navigator = useNavigate()
  const { t } = useLang()

  const routeParams = createMemo(() => {
    let index = barItems.findIndex((item) => item.path === location.pathname)
    console.log(index)
    return {
      pathname: location.pathname,
      index
    }
  })

  // const [index] = createSignal(0)

  return (
    <div class="w-68 bg-cnb5 h-[calc(100vh-48px)] relative">
      <div>
        {barItems.map((item) => {
          return (
            <div
              class={`h-56 text-center flex flex-col items-center hover:bg-white ${
                item.path === routeParams().pathname ? 'fill-cnf3bs text-cnf3bs' : ''
              }`}
              onclick={() => {
                // onClick(item.path)
                navigator(item.path)
              }}
            >
              <SvgIcon className="m-auto" name={item.icon} size={24}></SvgIcon>
              <div class="text-10">
                {item.name} {t('chat', 'activity')}
              </div>
            </div>
          )
        })}
      </div>
      <Show when={routeParams().index !== -1}>
        <div
          class="h-50 w-2 top-0 absolute bg-cnf3bs left-2 top-3 rounded-4"
          style={{
            content: '',
            transition: 'all 0.1s',
            translate: '0px ' + routeParams().index * 56 + 'px'
          }}
        ></div>
      </Show>
    </div>
  )
}
