import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import Table from '@/components/Common/Table/Table'

interface FileTableInf {
  icon: string
  id: number
  name: string
  date: string
  person: string
}

export default function ChatFile() {
  const columns = [
    { type: 'checkbox', width: '40px', name: 'checkbox' },
    {
      name: 'icon',
      title: '图标',
      render: (_text: string, _dataSource: any) => {
        return (
          <div>
            {_text === 'excel' ? (
              <SvgIcon
                name="excel"
                onClick={() => {
                  console.log(_text, _dataSource)
                }}
              ></SvgIcon>
            ) : (
              <SvgIcon
                name="folder"
                onClick={() => {
                  console.log(_text, _dataSource)
                }}
              ></SvgIcon>
            )}
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
      icon: 'excel',
      id: 1,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    },
    {
      icon: 'excel',
      id: 2,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    },
    {
      icon: 'excel',
      id: 3,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷'
    },
    {
      icon: 'file',
      id: 4,
      name: 'Excel第一个',
      date: '2020-04-05',
      person: '郑永楷',
      _disabled: true
    }
  ]
  return (
    <div class="overflow-hidden h-full">
      <div class="px-40 h-46 flex items-center text-cnf3 cursor-pointer top-0">
        <SvgIcon name="upload" className="mr-6"></SvgIcon>
        <span class="font-700">上传</span>
      </div>
      <div class="overflow-y-auto h-full ">
        <Table<FileTableInf>
          dataSource={dataList}
          column={columns}
          rowKey={'id'}
          onRowChecked={(_data) => {
            // console.log(data.filter(item))
          }}
        ></Table>
      </div>
    </div>
  )
}
