import AvatarImg from '@/assets/img/avatar.png'
import Avatar from '../../Avatar/Avatar'

export default function SearchItem() {
  return (
    <>
      <div role="option" class="px-16 pt-7 pb-5 hover:bg-cnb1 cursor-pointer">
        <div class="flex items-center ">
          <Avatar online src={AvatarImg}></Avatar>

          <div class="ml-10 text-cnf2h">
            <div class="text-14 ">Kevin</div>
            <div class="text-12">Kevin.foxconn.com</div>
          </div>
        </div>
      </div>
    </>
  )
}
