import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import { useNavigate } from '@solidjs/router'

export default function LeftBar() {
  const navigate = useNavigate()
  const barItems = [
    {
      path: '/notice',
      icon: 'activity',
      name: '活动'
    },
    {
      path: '/chat',
      icon: 'teams',
      name: '聊天'
    },
    {
      path: '/calendar',
      icon: 'calendar',
      name: '团队'
    }
  ]

  return (
    <div class="w-68 ">
      {barItems.map((item) => {
        return (
          <div
            class="h-56 text-center flex flex-col items-center"
            onClick={() => {
              navigate(item.path)
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
