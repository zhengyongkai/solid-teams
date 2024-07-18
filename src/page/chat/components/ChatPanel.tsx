import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import Avatar from '@/assets/img/avatar.png'

export default function ChatPanel() {
  return (
    <div class="flex flex-col h-full ">
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss">
        <div class="font-700 text-18 flex-1 flex items-center">
          <img class="w-32 h-32  rounded-full mr-10" src={Avatar} alt="" />
          郑永楷
        </div>
        <div>
          <div class="mr-8">
            <SvgIcon name="setting" size={20} />
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
      <div class="w-[90%] mb-14 mx-auto h-43 rounded-4 px-10 py-8  border-1 border-cns2">
        <input type="text" class="h-full w-full outline-none rounded-4" placeholder="请输入内容" />
      </div>
    </div>
  )
}
