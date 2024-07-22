import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'

export default function TeamsPanel() {
  return (
    <div class="flex flex-col h-full ">
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss">
        <div class="font-700 text-18 flex-1 flex items-center  ">常规</div>
        <div>
          <div class="mr-8">
            <SvgIcon name="setting" size={20} />
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
      <div>
        <button class="btn btn-primary">开始发帖</button>
      </div>
    </div>
  )
}
