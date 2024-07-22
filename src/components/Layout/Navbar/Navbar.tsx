import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import AvatarImg from '@/assets/img/avatar.png'
import SearchBar from '@/components/Common/Search'
import { useNavigate } from '@solidjs/router'
import Avatar from '@/components/Common/Avatar/Avatar'

export default function Navbar() {
  const navigator = useNavigate()

  return (
    <div class="h-48px flex items-center bg-cnb5 border-b-1 border-cnsal">
      <div class="w-64px text-center">
        <SvgIcon name="more" className="m-auto"></SvgIcon>
      </div>
      <div>
        <SvgIcon name="logo" size={24}></SvgIcon>
      </div>
      <div class="justify-center  flex-1 flex justify-center ">
        <SearchBar className="max-lg:hidden"></SearchBar>
      </div>

      <div class="dropdown dropdown-end">
        <div tabIndex={0} class="btn btn-square w-32 h-32 min-h-32">
          <SvgIcon name="setting" size={24}></SvgIcon>
        </div>
        <ul
          tabIndex={0}
          class="menu dropdown-content bg-base-100 rounded-box z-[1] w-200 p-2 shadow"
        >
          <li
            onClick={() => {
              navigator('/common/setting')
            }}
          >
            <a>设置</a>
          </li>
          <li>
            <a>关于我们</a>
          </li>
        </ul>
      </div>
      <div class="w-50   text-center relative ">
        <Avatar src={AvatarImg}></Avatar>
      </div>
    </div>
  )
}
