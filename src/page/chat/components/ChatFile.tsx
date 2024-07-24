import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import Table from '@/components/Common/Table/Table'

export default function ChatFile() {
  const columns = [
    { name: 'name', title: '名称', width: '150px' },
    { name: 'x', title: 'X', width: '300px' },
    { name: 'y', title: 'Y', width: '1200px' },
    { name: 'date', title: '日期', width: '100px' }
  ]

  const dataList = [
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1
    },
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1
    },
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1
    },
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1
    }
  ]
  return (
    <div class="overflow-hidden h-full">
      <div class="px-20 h-46 flex items-center text-cnf3 pointer-cursor sticky top-0">
        <SvgIcon name="upload" className="mr-6"></SvgIcon>
        <span class="font-700">上传</span>
      </div>
      <div class="overflow-y-auto h-full px-20">
        <Table dataSource={dataList} column={columns}></Table>
      </div>
    </div>
  )
}
