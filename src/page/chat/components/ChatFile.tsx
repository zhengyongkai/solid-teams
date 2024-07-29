import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import Table from '@/components/Common/Table/Table'

export default function ChatFile() {
  const columns = [
    {
      name: 'name',
      title: '图标',
      render: (_data: number) => {
        return (
          <div>
            <SvgIcon name="excel"></SvgIcon>
          </div>
        )
      },
      rowRender: () => {
        return <SvgIcon name="file"></SvgIcon>
      },
      width: '40px'
    },
    { name: 'name', title: '名称' },
    { name: 'date', title: '共享日期' },
    { name: 'person', title: '发件人' }
  ]

  const dataList = [
    {
      id: 1,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    },
    {
      id: 2,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    },
    {
      id: 3,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    },
    {
      id: 4,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    }
  ]
  return (
    <div class="overflow-hidden h-full">
      <div class="px-20 h-46 flex items-center text-cnf3 pointer-cursor sticky top-0">
        <SvgIcon name="upload" className="mr-6"></SvgIcon>
        <span class="font-700">上传</span>
      </div>
      <div class="overflow-y-auto h-full ">
        <Table
          dataSource={dataList}
          column={columns}
          onRowChecked={(data) => {
            console.log(data)
          }}
        ></Table>
      </div>
    </div>
  )
}
