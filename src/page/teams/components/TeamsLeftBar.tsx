import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'

export default function TeamsLeftBar() {
  return (
    <div class="bg-cdb7 flex flex-col h-full">
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss">
        <div class="font-700 text-18 flex-1">团队</div>
        <div class="flex ">
          <div class="mr-8">
            <SvgIcon name="setting" size={20} />
          </div>
          <div>
            <SvgIcon name="edit" size={20} />
          </div>
        </div>
      </div>
      <div class="h-screenb flex-1"></div>
    </div>
  )
}
