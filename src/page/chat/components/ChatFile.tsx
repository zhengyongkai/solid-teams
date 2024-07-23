import SvgIcon from '@/components/Common/SvgIcon/SvgIcon';
import Table from '@/components/Common/Table/Table';

export default function ChatFile() {
  return (
    <div class="overflow-hidden h-full">
      <div class="px-20 h-46 flex items-center text-cnf3 pointer-cursor sticky top-0">
        <SvgIcon name="upload" className="mr-6"></SvgIcon>
        <span class="font-700">上传</span>
      </div>
      <div class="overflow-y-auto h-full px-20">
        <Table></Table>
      </div>
    </div>
  );
}
