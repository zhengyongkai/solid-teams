import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import useLang from '@/hook/useLang'

interface LeftBarInf {
  onClick: (type: string) => void
}

export default function LeftBar(props: LeftBarInf) {
  const { onClick } = props
  const { t, setLocale } = useLang()
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
    <div class="w-68 ">
      {barItems.map((item) => {
        return (
          <div
            class="h-56 text-center flex flex-col items-center"
            onclick={() => {
              onClick(item.path)
              setLocale('en')
            }}
          >
            <SvgIcon className="m-auto" name={item.icon} size={24}></SvgIcon>
            <div class="text-10">{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}
