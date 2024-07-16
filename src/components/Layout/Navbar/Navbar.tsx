import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import Avatar from '@/assets/img/avatar.png'

export default function Navbar() {
  return (
    <div class="h-48px flex items-center">
      <div class="w-64px">
        <SvgIcon name="more" className="m-auto"></SvgIcon>
      </div>
      <div>
        <SvgIcon name="logo" size={24}></SvgIcon>
      </div>
      <div class="justify-center flex-1 flex justify-center">dasd</div>
      <div class="w-32">
        <SvgIcon name="setting" size={24}></SvgIcon>
      </div>

      <div class="w-50 text-center relative">
        <img class="w-32 h-32 m-auto rounded-full" src={Avatar} alt="" />
        <div class="absolute right-10 top-22">
          <SvgIcon name="online" size={10}></SvgIcon>
        </div>
      </div>
    </div>
  )
}
